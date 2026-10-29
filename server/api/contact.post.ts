import nodemailer, { type Transporter } from 'nodemailer'

const SITEVERIFY_URL =
    'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const TURNSTILE_ACTION = 'contact'
const SUCCESS_PAGE = '/contact-submission/'
const ERROR_PAGE = '/?contact=erreur#contact'
const MAX_NAME_LENGTH = 100
const MAX_MESSAGE_LENGTH = 5000
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ContactConfig = ReturnType<typeof useRuntimeConfig>

let transporter: Transporter | undefined

const getTransporter = (config: ContactConfig): Transporter => {
    transporter ??= nodemailer.createTransport({
        host: config.smtpHost,
        port: Number(config.smtpPort),
        secure: false,
        requireTLS: true,
        auth: {
            user: config.smtpUser,
            pass: config.smtpPassword,
        },
    })

    return transporter
}

const isTurnstileTokenValid = async (
    token: string,
    secretKey: string,
    remoteIp: string | undefined
): Promise<boolean> => {
    if (token === '' || token.length > 2048) {
        return false
    }

    const verification = await $fetch<{ success: boolean; action?: string }>(
        SITEVERIFY_URL,
        {
            method: 'POST',
            body: { secret: secretKey, response: token, remoteip: remoteIp },
            timeout: 10000,
        }
    ).catch((error) => {
        console.error('[contact] Turnstile siteverify failed', error)

        return { success: false }
    })

    return verification.success && verification.action === TURNSTILE_ACTION
}

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const form = await readFormData(event)
    const field = (name: string): string => String(form.get(name) ?? '').trim()

    if (field('bot-field') !== '') {
        return sendRedirect(event, SUCCESS_PAGE, 303)
    }

    const lastName = field('last_name').slice(0, MAX_NAME_LENGTH)
    const firstName = field('first_name').slice(0, MAX_NAME_LENGTH)
    const email = field('email')
    const phone = field('telephone').slice(0, MAX_NAME_LENGTH)
    const message = field('message').slice(0, MAX_MESSAGE_LENGTH)
    const hasConsented = field('agree') !== ''

    const isSubmissionComplete =
        lastName !== '' &&
        firstName !== '' &&
        EMAIL_PATTERN.test(email) &&
        message !== '' &&
        hasConsented

    if (!isSubmissionComplete) {
        return sendRedirect(event, ERROR_PAGE, 303)
    }

    if (config.smtpPassword === '' || config.turnstileSecretKey === '') {
        console.error('[contact] SMTP password or Turnstile secret is not set')

        return sendRedirect(event, ERROR_PAGE, 303)
    }

    const isHuman = await isTurnstileTokenValid(
        field('cf-turnstile-response'),
        config.turnstileSecretKey,
        getRequestHeader(event, 'cf-connecting-ip')
    )

    if (!isHuman) {
        return sendRedirect(event, ERROR_PAGE, 303)
    }

    try {
        await getTransporter(config).sendMail({
            from: {
                name: 'Formulaire guillaume-cazin.fr',
                address: config.smtpUser,
            },
            to: config.contactRecipient,
            replyTo: { name: `${firstName} ${lastName}`, address: email },
            subject: `Nouveau message de ${firstName} ${lastName}`,
            text: [
                `Nom : ${lastName}`,
                `Prénom : ${firstName}`,
                `E-mail : ${email}`,
                `Téléphone : ${phone === '' ? 'non renseigné' : phone}`,
                '',
                message,
            ].join('\n'),
        })
    } catch (error) {
        console.error('[contact] SMTP send failed', error)

        return sendRedirect(event, ERROR_PAGE, 303)
    }

    return sendRedirect(event, SUCCESS_PAGE, 303)
})
