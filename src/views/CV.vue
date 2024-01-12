<script setup>
import Icon from '../components/elements/Icon.vue'
import Navbar from '../components/layout/Navbar.vue'
import Section from '../components/layout/Section.vue'
import Footer from '../components/layout/Footer.vue'
import Button from '../components/elements/Button.vue'
import Link from '../components/elements/Link.vue'
import Badge from '../components/elements/Badge.vue'
import { onBeforeMount, onMounted, ref } from 'vue'

const skills = [
    {
        title: 'Relations clientèle',
        rating: 'Maîtrise',
    },
    {
        title: 'Aptitude aux chiffres',
        rating: 'Maîtrise',
    },
    {
        title: 'Sens de l\'organisation',
        rating: 'Maîtrise',
    },
    {
        title: 'Maîtrise de l\'informatique',
        rating: 'Maîtrise',
    },
    {
        title: 'Travail en équipe',
        rating: 'Maîtrise',
    },
]

const formations = [
    {
        title: 'Brevet Professionnel Esthétique',
        school: 'CFA, Béthune',
        date: 'Août 2009 à Décembre 2011',
        // description: 'Lorem ipsum dolor sit amet',
    },
    {
        title: 'CAP Esthétique',
        school: 'Lycée St Pierre, Calais',
        date: 'Septembre 2007 à Juin 2009',
        // description: 'Lorem ipsum dolor sit amet',
    },
]

const experiences = [
    {
        title: 'Responsable adjointe',
        enterprise: 'Bijouterie Virginie, Outreau',
        date: 'Mai 2016 à aujourd\'hui',
        description:
            "Management d'une équipe de 8 personnes, gestion des chiffres du magasin, saisie des commandes fournisseurs, gestion du stock, saisie des marchandises, appel des fournisseurs, contrôle des commandes et délais de livraison, saisie des factures, gestion du courrier, vente.",
    },
    {
        title: 'Gérante',
        enterprise: 'Institut Perle Marine, Lumbres',
        date: 'Avril 2014 à Mars 2016',
        description:
            "Gérante d'un institut de beauté, comptabilité, commandes fournisseurs, suivis des stocks, réception de la marchandise, saisies et suivis des stocks, soins esthétiques, vente."
    },
    {
        title: 'Conseillère vente',
        enterprise: 'Terres et Eaux, Calais',
        date: 'Avril 2012 à Février 2014',
        description:
            "Vente, réception de la marchandise, étiquetage, mise en rayon, suivis des stocks, conseils clients, mise en place d'un rayon, travail en équipe",
    },
]

onBeforeMount(() => {
    if (window.scrollY) {
        window.scroll(0, 0)
    }
})

onMounted(() => {
    document.title += 'CV - Guillaume Cazin - Développeur web freelance'
})
</script>

<template>
    <Navbar />

    <Section title="CV" id="hero">
        <div class="mx-auto max-w-4xl">
            <a href="/images/misc/cv.pdf" target="_blank">
                <Button class="mb-7 text-center"
                    >Télécharger la version PDF</Button
                >
            </a>
            <div class="block lg:hidden">
                <img
                    src="/images/misc/cv.webp"
                    class="w-full"
                    type="application/pdf"
                    alt="CV"
                />
            </div>
            <div
                class="hidden bg-white shadow-lg dark:bg-gray-800 lg:block"
                id="cv"
            >
                <!-- First section -->
                <div class="mb-3 mt-5 flex items-center pl-10">
                    <div class="mr-5 w-60">
                        <div class="relative hidden text-center lg:block">
                            <img
                                src="/images/misc/blob-tear.svg"
                                class="absolute -bottom-2 -left-2 w-20"
                                alt="Background"
                            />
                            <img
                                src="/images/misc/avatar.webp"
                                class="relative z-30 m-auto w-52 rounded-br-3xl rounded-tl-3xl bg-gray-50"
                                alt="Avatar"
                            />
                            <img
                                src="/images/misc/blob-tear.svg"
                                class="absolute -right-2 -top-2 w-20"
                                alt="Background"
                            />
                        </div>
                    </div>
                    <div class="flex flex-1 flex-col justify-center gap-3 pl-7">
                        <div class="text-2xl">
                            <span class="text-3xl uppercase"
                                >Marine Arnoux</span
                            >
                        </div>
<!--                        <div>
                            <span class="text-4xl font-bold uppercase"
                                >Développeur web</span
                            >
                        </div>-->
                        <div class="flex justify-between">
                            <div class="flex-1">
                                <div class="block">
                                    <span
                                        class="border-before pb-2 font-bold uppercase"
                                        >Contact</span
                                    >
                                </div>
                                <div class="mt-2 flex flex-col gap-1">
                                    <a
                                        href="mailto:czn.guillaume@gmail.com"
                                        target="_blank"
                                        class="flex items-center underline decoration-dotted"
                                    >
                                        <Icon
                                            name="mail"
                                            :outline="false"
                                            class="mr-1 text-indigo-700"
                                        />
                                        marinearnoux@outlook.fr
                                    </a>
                                    <a
                                        href="tel:06.10.85.42.18"
                                        target="_blank"
                                        class="flex items-center underline decoration-dotted"
                                    >
                                        <Icon
                                            name="call"
                                            :outline="false"
                                            class="mr-1 text-indigo-700"
                                        />
                                        06 51 08 32 25
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Second section -->
                <div class="flex">
                    <div class="w-60 py-4 pl-10">
                        <div class="flex flex-col gap-3">
                            <div class="mb-2 flex-1">
                                <div class="mb-2 block">
                                    <span
                                        class="border-before pb-2 text-lg font-bold uppercase"
                                        ><Icon
                                            name="code-slash"
                                            class="mr-1 text-indigo-700"
                                        />
                                        Compétences</span
                                    >
                                </div>
                                <div
                                    class="mt-3 flex flex-wrap justify-between gap-x-1 gap-y-2 bg-white"
                                    v-for="(skill, index) in skills.sort(
                                        (a, b) => b.rating - a.rating
                                    )"
                                    :key="index"
                                >
                                    <span>
                                        {{ skill.title }}
                                    </span>
                                </div>
                            </div>
                            <hr />
                            <div class="mb-2 flex-1">
                                <div class="block">
                                    <span
                                        class="border-before pb-2 text-lg font-bold uppercase"
                                        ><Icon
                                            name="language"
                                            class="mr-1 text-indigo-700"
                                        />
                                        Langues</span
                                    >
                                    <span class="inline font-bold text-indigo-700"
                                        >__</span
                                    >
                                </div>
                                <div
                                    class="mt-3 flex flex-col gap-y-2 bg-white"
                                >
                                    <div class="flex w-full">
                                        <div class="flex-1">Français</div>
                                        <div class="flex-1 text-end">
                                            Natale
                                        </div>
                                    </div>
                                    <div class="flex w-full">
                                        <div class="flex-1">Anglais</div>
                                        <div class="flex-1 text-end">
                                            Scolaire
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col gap-3 px-7 py-3">
                            <!-- Expériences professionnelles -->
                            <div class="flex-1">
                                <div class="mb-2 block">
                                    <span
                                        class="border-before pb-2 text-lg font-bold uppercase"
                                        ><Icon
                                            name="briefcase"
                                            class="mr-1 text-indigo-700"
                                        />
                                        Expériences professionnelles</span
                                    >
                                    <span class="inline font-bold text-indigo-700"
                                        >__</span
                                    >
                                </div>
                                <div class="flex flex-col gap-2 bg-white">
                                    <div
                                        class="flex"
                                        v-for="(
                                            experience, index
                                        ) in experiences"
                                        :key="index"
                                    >
                                        <div class="flex flex-1 flex-col">
                                            <div class="flex-1">
                                                <span class="font-bold">
                                                    {{ experience.title }}
                                                </span>
                                            </div>
                                            <div class="flex-1">
                                                <div class="text-gray-500">
                                                    {{ experience.enterprise }}
                                                </div>
                                            </div>
                                            <div class="flex-1">
                                                <div
                                                    class="text-md text-gray-700"
                                                >
                                                    {{ experience.description }}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-32 text-end">
                                            {{ experience.date }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <!-- Formations & diplômes -->
                            <div class="mb-2 flex-1">
                                <div class="mb-2 block">
                                    <span
                                        class="border-before pb-2 text-lg font-bold uppercase"
                                        ><Icon
                                            name="school"
                                            class="mr-1 text-indigo-700"
                                        />
                                        Formations & diplômes</span
                                    >
                                    <span class="inline font-bold text-indigo-700"
                                        >__</span
                                    >
                                </div>
                                <div class="flex flex-col gap-2 bg-white">
                                    <div
                                        class="flex"
                                        v-for="(formation, index) in formations"
                                        :key="index"
                                    >
                                        <div class="flex flex-1 flex-col">
                                            <div class="flex-1">
                                                <span class="font-bold">
                                                    {{ formation.title }}
                                                </span>
                                            </div>
                                            <div class="flex-1">
                                                <div class="text-gray-500">
                                                    {{ formation.school }}
                                                </div>
                                            </div>
                                            <!--                      <div class="flex-1">
                                              <div class="text-md text-gray-700">{{ formation.description }}</div>
                                            </div>-->
                                        </div>
                                        <div class="w-32 text-end">
                                            {{ formation.date }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>

    <Footer has-background />
</template>

<style scoped>
#cv {
    height: 29.7cm;
    width: 21cm;
    overflow: hidden;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%231d4ed8' fill-opacity='0.05'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
}
</style>
