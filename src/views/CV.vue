<template>
  <Navbar />

  <Section title="CV" id="hero">
    <div class="max-w-4xl mx-auto">
      <a href="/images/misc/cv.pdf" target="_blank">
        <Button class="mb-7 text-center">Version PDF</Button>
      </a>
      <div class="block lg:hidden">
        <img src="/images/misc/cv.png" class="w-full" type="application/pdf" alt="CV">
      </div>
      <div class="shadow-lg bg-white dark:bg-gray-800 hidden lg:block" id="cv">
        <!-- First section -->
        <div class="flex pl-10 mt-5 mb-3 items-center">
          <div class="w-60 mr-5">
            <div class="relative text-center hidden lg:block">
              <img src="/images/misc/blob-tear.svg" class="w-20 absolute -bottom-2 -left-2" alt="Background">
              <img src="/images/misc/avatar.png" class="relative m-auto bg-gray-50 w-52 rounded-tl-3xl rounded-br-3xl z-30" alt="Avatar">
              <img src="/images/misc/blob-tear.svg" class="w-20 absolute -top-2 -right-2" alt="Background">
            </div>
          </div>
          <div class="flex justify-center gap-3 flex-col pl-7 flex-1">
            <div class="text-2xl">
              <span class="uppercase text-3xl">Guillaume Cazin</span>
            </div>
            <div>
              <span class="text-4xl uppercase font-bold">Développeur web</span>
            </div>
            <div class="flex justify-between">
              <div class="flex-1">
                <div class="block">
                  <span class="border-before font-bold uppercase pb-2">Contact</span>
                  <span class="text-blue-700 inline font-bold">__</span>
                </div>
                <div class="flex flex-col gap-1 mt-2">
                  <a href="mailto:czn.guillaume@gmail.com" target="_blank" class="flex items-center underline decoration-dotted">
                    <Icon name="mail" :outline="false" class="text-blue-700 mr-1" />
                    czn.guillaume@gmail.com
                  </a>
                  <a href="tel:06.10.85.42.18" target="_blank" class="flex items-center underline decoration-dotted">
                    <Icon name="call" :outline="false" class="text-blue-700 mr-1" />
                    +33 6 10 85 42 18
                  </a>
                </div>
              </div>
              <div class="flex-1">
                <div class="block">
                  <span class="border-before font-bold uppercase pb-2">Social</span>
                  <span class="text-blue-700 inline font-bold">__</span>
                </div>
                <div class="flex flex-col gap-1 mt-2">
                  <a target="_blank" href="https://www.linkedin.com/in/guillaume-cazin/" class="flex items-center underline decoration-dotted">
                    <Icon name="logo-linkedin" class="mr-1" :outline="false" />
                    guillaume-cazin
                  </a>
                  <a target="_blank" href="http://github.com/gcazin" class="flex items-center underline decoration-dotted">
                    <Icon name="logo-github" class="mr-1" :outline="false" />
                    gcazin
                  </a>
                  <a target="_blank" href="https://codepen.io/gcazin" class="flex items-center underline decoration-dotted">
                    <Icon name="logo-codepen" class="mr-1" :outline="false" />
                    gcazin
                  </a>
                </div>
              </div>
            </div>
            <div>
              <a class="text-blue-700 font-bold uppercase" href="/cv">www.guillaume-cazin.fr</a>
            </div>
          </div>
        </div>

        <div class="mx-10 border-b">
          <div class="block mb-2">
            <span class="border-before font-bold text-xl uppercase pb-2"><Icon name="person" class="mr-1 text-blue-700" /> A propos</span>
            <span class="text-blue-700 inline font-bold"> __</span>
          </div>
          <div class="bg-white pb-2 mb-1">
            Passionné depuis 12 ans par tout ce qui est attrait au développement web,
            j'y ai consacré l'entièreté de mes années d'études et la majorité de mon temps libre durant toutes ces années.
          </div>
        </div>

        <!-- Second section -->
        <div class="flex">
          <div class="py-4 pl-10 w-60">
            <div class="flex flex-col gap-3">
              <div class="flex-1 mb-2">
                <div class="block mb-2">
                  <span class="border-before font-bold text-lg uppercase pb-2"><Icon name="code-slash" class="mr-1 text-blue-700" /> Compétences</span>
                  <span class="text-blue-700 inline font-bold">__</span>
                </div>
                <div
                    class="flex justify-between flex-wrap gap-x-1 gap-y-2 mt-3 bg-white"
                    v-for="(skill, index) in skills.sort((a,b) => b.rating - a.rating)"
                    :key="index"
                >
                  <span
                  >
                    {{ skill.title }}
                  </span>
                  <div class="flex items-center">
                    <svg v-for="i in skill.rating" :key="i" aria-hidden="true" class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg v-for="n in 5 - skill.rating" :key="n" aria-hidden="true" class="w-4 h-4 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>

                  </div>
                </div>
              </div>
              <hr>
              <div class="flex-1 mb-2">
                <div class="block">
                  <span class="border-before font-bold text-lg uppercase pb-2"><Icon name="language" class="mr-1 text-blue-700" /> Langues</span>
                  <span class="text-blue-700 inline font-bold">__</span>
                </div>
                <div class="flex flex-col gap-y-2 mt-3 bg-white">
                  <div class="flex w-full">
                    <div class="flex-1">Français</div>
                    <div class="flex-1 text-end">Natale</div>
                  </div>
                  <div class="flex w-full">
                    <div class="flex-1">Anglais</div>
                    <div class="flex-1 text-end">Confirmé</div>
                  </div>
                </div>
              </div>
              <hr>
              <div class="flex-1">
                <div class="block">
                  <span class="border-before font-bold text-lg uppercase pb-2"><Icon name="library" class="mr-1 text-blue-700" /> Loisirs</span>
                  <span class="text-blue-700 inline font-bold">__</span>
                </div>
                <div class="mt-3 bg-white">
                  🚲Vélo, 👨‍💻programmation, 🎮jeux-vidéo, 🪐astronomie
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1">
            <div class="flex flex-col gap-3 px-7 py-3">
              <!-- Expériences professionnelles -->
              <div class="flex-1">
                <div class="block mb-2">
                  <span class="border-before font-bold text-lg uppercase pb-2"><Icon name="briefcase" class="mr-1 text-blue-700" /> Expériences professionnelles</span>
                  <span class="text-blue-700 inline font-bold">__</span>
                </div>
                <div class="flex flex-col gap-2 bg-white">
                  <div class="flex" v-for="(experience, index) in experiences" :key="index">
                    <div class="flex flex-col flex-1">
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
                        <div class="text-md text-gray-700">{{ experience.description }}</div>
                      </div>
                    </div>
                    <div class="w-32 text-end">{{ experience.date }}</div>
                  </div>
                </div>
              </div>

              <hr>

              <!-- Formations & diplômes -->
              <div class="flex-1 mb-2">
                <div class="block mb-2">
                  <span class="border-before font-bold text-lg uppercase pb-2"><Icon name="school" class="mr-1 text-blue-700" /> Formations & diplômes</span>
                  <span class="text-blue-700 inline font-bold">__</span>
                </div>
                <div class="flex flex-col gap-2 bg-white">
                  <div class="flex" v-for="(formation, index) in formations" :key="index">
                    <div class="flex flex-col flex-1">
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
                    <div class="w-32 text-end">{{ formation.date }}</div>
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

<script>
import Icon from "../components/elements/Icon.vue";
import Navbar from "../components/layout/Navbar.vue";
import Section from "../components/layout/Section.vue";
import Footer from "../components/layout/Footer.vue";
import Button from "../components/elements/Button.vue";
import Link from "../components/elements/Link.vue";

export default {
  name: "CV",

  components: {
    Link,
    Button,
    Footer,
    Section,
    Navbar,
    Icon
  },

  data() {
    return {
      skills: [
        {
          title: 'HTML5',
          rating: 5
        },
        {
          title: 'CSS3',
          rating: 4
        },
        {
          title: 'SCSS',
          rating: 3,
        },
        {
          title: 'Javascript',
          rating: 4,
        },
        {
          title: 'VueJS 3',
          rating: 5
        },
        {
          title: 'jQuery',
          rating: 4
        },
        {
          title: 'PHP8',
          rating: 4
        },
        {
          title: 'Laravel 9',
          rating: 4
        },
        {
          title: 'Wordpress 6',
          rating: 3,
        },
        {
          title: 'Drupal 8',
          rating: 3
        },
      ],
      formations: [
        {
          title: 'Licence professionnelle Développement Internet et Mobile',
          school: 'IUT, Calais (62250)',
          date: '2019-2020',
          // description: 'Lorem ipsum dolor sit amet',
        },
        {
          title: "BTS SIO option SLAM",
          school: 'Lycée Saint-Joseph, Saint-Martin-Boulogne (62280)',
          date: 'Juin 2019',
          // description: 'Lorem ipsum dolor sit amet',
        },
        {
          title: "Bac STI2D option SIN",
          school: 'Lycée Édouard Branly, Boulogne-sur-Mer (62200)',
          date: 'Juin 2017',
          // description: 'Lorem ipsum dolor sit amet',
        },
      ],
      experiences: [
        {
          title: "Développeur web",
          enterprise: 'CDI, Diatem, Strasbourg (67000)',
          date: '2020-2022',
          description: "Plateforme spécialisée en PHP et VueJS, Site vitrine sous Drupal et Wordpress",
        },
        {
          title: "Stage en développement web",
          enterprise: 'Stage, Armatis, Calais (62100)',
          date: '2019',
          description: "Création d'une application mobile en React-Native avec API développé en Laravel",
        },
        {
          title: "Stage en développement web",
          enterprise: 'Stage, Mes Concierges, Marquise (62250)',
          date: '2018',
          description: "Création d'une marketplace avec l'utilisation d'un framework PHP (Cocorico)",
        },
        {
          title: "Stage en développement web",
          enterprise: "Stage, Mairie d'Echinghen, Echinghen (62360)",
          date: '2017',
          description: "Création d'un site vitrine en utilisant le CMS Wordpress",
        },
        /*{
          title: "Stage dans une entreprise d'informatique",
          enterprise: 'Stage, Boutique informatique, Boulogne-sur-Mer (62200)',
          date: '2012',
          description: 'Approfondissement des connaissances sur le langage PHP',
        },*/
      ],
      date: new Date().getFullYear(),
      loading: false,
    }
  },
  beforeCreate() {
    if (window.scrollY) {
      window.scroll(0,0)
    }
  },
}
</script>

<style scoped>
#cv {
  height: 29.7cm;
  width: 21cm;
  overflow: hidden;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%231d4ed8' fill-opacity='0.05'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
}
/*.border-before {
  position: relative;
}
.border-before::before {
  content: '';
  height: 4px;
  width: 100px;
  background: rgb(59 130 246);
  position: absolute;
  bottom: -2px;
}*/
</style>