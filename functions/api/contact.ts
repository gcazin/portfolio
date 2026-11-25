import { WorkerMailer } from 'worker-mailer'

interface Env {
    SMTP_PASSWORD?: string
    TURNSTILE_SECRET_KEY?: string
}

interface ContactSubmission {
    lastName: string
    firstName: string
    email: string
    phone: string
    message: string
}

const SITEVERIFY_URL =
    'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const TURNSTILE_ACTION = 'contact'
const SMTP_HOST = 'pro3.mail.ovh.net'
const SMTP_PORT = 587
const SMTP_USER = 'contact@guillaume-cazin.fr'
const CONTACT_RECIPIENT = 'contact@guillaume-cazin.fr'
const SUCCESS_PAGE = '/contact-submission/'
const ERROR_PAGE = '/?contact=erreur#contact'
const MAX_NAME_LENGTH = 100
const MAX_MESSAGE_LENGTH = 5000
const MAX_TOKEN_LENGTH = 2048
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const CONTROL_CHARACTERS = /[\u0000-\u001f\u007f]+/g

const redirectTo = (request: Request, path: string): Response =>
    Response.redirect(new URL(path, request.url).toString(), 303)

const readSubmission = (form: FormData): ContactSubmission | null => {
    const field = (name: string): string => String(form.get(name) ?? '').trim()
    const singleLineField = (name: string): string =>
        field(name)
            .replace(CONTROL_CHARACTERS, ' ')
            .trim()
            .slice(0, MAX_NAME_LENGTH)
    const submission = {
        lastName: singleLineField('last_name'),
        firstName: singleLineField('first_name'),
        email: field('email'),
        phone: singleLineField('telephone'),
        message: field('message').slice(0, MAX_MESSAGE_LENGTH),
    }
    const isComplete =
        submission.lastName !== '' &&
        submission.firstName !== '' &&
        EMAIL_PATTERN.test(submission.email) &&
        submission.message !== '' &&
        field('agree') !== ''

    return isComplete ? submission : null
}

const isTurnstileTokenValid = async (
    token: string,
    secretKey: string,
    remoteIp: string | null
): Promise<boolean> => {
    if (token === '' || token.length > MAX_TOKEN_LENGTH) {
        return false
    }

    const body = new FormData()
    body.set('secret', secretKey)
    body.set('response', token)
    if (remoteIp !== null) {
        body.set('remoteip', remoteIp)
    }

    try {
        const response = await fetch(SITEVERIFY_URL, {
            method: 'POST',
            body,
            signal: AbortSignal.timeout(10000),
        })
        const verification = await response.json<{
            success: boolean
            action?: string
        }>()

        return verification.success && verification.action === TURNSTILE_ACTION
    } catch (error) {
        console.error('[contact] Turnstile siteverify failed', error)

        return false
    }
}

const sendContactMail = async (
    submission: ContactSubmission,
    smtpPassword: string
): Promise<void> => {
    const fullName = `${submission.firstName} ${submission.lastName}`
    const mailer = await WorkerMailer.connect({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: false,
        startTls: true,
        credentials: { username: SMTP_USER, password: smtpPassword },
        authType: 'plain',
    })

    try {
        await mailer.send({
            from: { name: 'Formulaire gcazin.com', email: SMTP_USER },
            to: { email: CONTACT_RECIPIENT },
            reply: { name: fullName, email: submission.email },
            subject: `Nouveau message de ${fullName}`,
            text: [
                `Nom : ${submission.lastName}`,
                `Prénom : ${submission.firstName}`,
                `E-mail : ${submission.email}`,
                `Téléphone : ${submission.phone === '' ? 'non renseigné' : submission.phone}`,
                '',
                submission.message,
            ].join('\n'),
        })
    } finally {
        await mailer.close()
    }
}

/**
 * Receives the home page contact form: rejects bots (honeypot, then Turnstile),
 * mails the message through the OVH mailbox and redirects to the outcome page.
 */
export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
    const form = await request.formData()

    if (String(form.get('bot-field') ?? '').trim() !== '') {
        return redirectTo(request, SUCCESS_PAGE)
    }

    const submission = readSubmission(form)

    if (submission === null) {
        return redirectTo(request, ERROR_PAGE)
    }

    if (!env.SMTP_PASSWORD || !env.TURNSTILE_SECRET_KEY) {
        console.error(
            '[contact] SMTP_PASSWORD or TURNSTILE_SECRET_KEY is not set'
        )

        return redirectTo(request, ERROR_PAGE)
    }

    const isHuman = await isTurnstileTokenValid(
        String(form.get('cf-turnstile-response') ?? '').trim(),
        env.TURNSTILE_SECRET_KEY,
        request.headers.get('cf-connecting-ip')
    )

    if (!isHuman) {
        return redirectTo(request, ERROR_PAGE)
    }

    try {
        await sendContactMail(submission, env.SMTP_PASSWORD)
    } catch (error) {
        console.error('[contact] SMTP send failed', error)

        return redirectTo(request, ERROR_PAGE)
    }

    return redirectTo(request, SUCCESS_PAGE)
}
