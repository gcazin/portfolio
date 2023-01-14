<template>
  <Navbar />

  <Section title="CV">
    <div class="max-w-4xl mx-auto">
      <Button class="mb-7 text-center" :disabled="loading" @click="download()">{{ !loading ? 'Version pdf téléchargeable' : 'En cours de génération'}}</Button>
      <div class="shadow-lg" id="cv" style="width: 21cm;
        height: 29.7cm;overflow: hidden">
        <!-- First section -->
        <div class="flex">
          <div class="w-60">
            <img class="m-auto w-full" src="/images/misc/me.jpg" alt="Photo de profil">
          </div>
          <div class="flex justify-center gap-3 bg-gray-100 flex-col p-7 flex-1">
            <div class="">
              <span class="uppercase text-4xl font-bold">Guillaume Cazin</span>
            </div>
            <div>
              <span class="text-2xl">Développeur web</span>
            </div>
            <div>
              Passionné depuis 12 ans par tout ce qui est attrait au développement web,
              j'y ai consacré l'entiéreté de mes années d'études et la majorité de mon temps libre durant tout ces années.
            </div>
          </div>
        </div>

        <!-- Second section -->
        <div class="flex">
          <div class="py-4 px-6 w-60 bg-gray-100">
            <div class="flex flex-col gap-3">
              <div class="flex-1">
                <span class="border-before font-bold text-lg border-b-2 border-blue-300 block uppercase pb-2">
                  Contact
                </span>
                <div class="flex flex-col gap-1 mt-2">
                  <p class="flex items-center"><Icon name="mail" class="mr-1" /> czn.guillaume@gmail.com</p>
                  <p class="flex items-center"><Icon name="call" class="mr-1" /> 06.10.85.42.18</p>
                  <p class="flex items-center"><Icon name="logo-linkedin" class="mr-1" :outline="false" /> guillaume-cazin</p>
                  <p class="flex items-center"><Icon name="logo-github" class="mr-1" :outline="false" /> gcazin</p>
                  <p class="flex items-center"><Icon name="logo-codepen" class="mr-1" :outline="false" /> gcazin</p>
                </div>
              </div>
              <div class="flex-1">
                <span class="border-before font-bold text-lg border-b-2 border-blue-300 block uppercase pb-2">
                  Compétences
                </span>
                <div class="flex flex-wrap gap-x-1 gap-y-2 mt-3">
                  <span
                      v-for="(skill, index) in skills"
                      :key="index"
                      class="bg-gray-200 text-gray-700 rounded-lg p-1 text-sm"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
              <div class="flex-1">
                <span class="border-before font-bold text-lg border-b-2 border-blue-300 block uppercase pb-2">
                  Langues
                </span>
                <div class="flex flex-col gap-y-2 mt-3">
                  <div class="flex w-full">
                    <div class="flex-1">🇫🇷 Français</div>
                    <div class="flex-1 text-end">Natale</div>
                  </div>
                  <div class="flex w-full">
                    <div class="flex-1">🇬🇧 Anglais</div>
                    <div class="flex-1 text-end">Confirmé</div>
                  </div>
                </div>
              </div>
              <div class="flex-1">
                <span class="border-before font-bold text-lg border-b-2 border-blue-300 block uppercase pb-2">
                  Loisirs
                </span>
                <div class="mt-3">
                  🚲Vélo, 👨‍💻programmation, 🎮jeux-vidéo
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1 bg-white">
            <div class="flex flex-col gap-3 px-7 py-3">
              <div class="flex-1">
                <span class="border-before font-bold text-lg border-b-2 border-blue-300 block uppercase pb-2">
                  Formations & diplômes
                </span>

                <div class="flex flex-col gap-1">
                  <div class="flex mt-3" v-for="(formation, index) in formations" :key="index">
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
              <div class="flex-1">
                <div class="border-before font-bold text-lg border-b-2 border-blue-300 block uppercase pb-2">
                  Expériences professionnelles
                </div>

                <div class="flex flex-col gap-1">
                  <div class="flex mt-3" v-for="(experience, index) in experiences" :key="index">
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
            </div>
          </div>
        </div>
        <div class="bg-gray-100 text-center">
          Version web de ce CV : <a class="text-blue-600 font-bold" href="/cv">https://guillaume-cazin.fr/cv</a> © Guillaume Cazin, {{ date }}
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
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default {
  name: "CV",

  components: {
    Button,
    Footer,
    Section,
    Navbar,
    Icon
  },

  data() {
    return {
      skills: [
        'HTML5',
        'CSS3',
        'SCSS',
        'Javascript',
        'VueJS 3',
        'jQuery',
        'PHP8',
        'Laravel 9',
        'Wordpress 6',
        'Drupal 8'
      ],
      formations: [
        {
          title: 'Licence professionnelle Développement Internet et Mobile',
          school: 'IUT, Calais (62250)',
          date: '2019-2020',
          // description: 'Lorem ipsum dolor sit amet',
        },
        {
          title: "BTS Systèmes d'informations aux Organisations (SIO) option SLAM",
          school: 'Lycée Saint-Joseph, Saint-Martin-Boulogne (62280)',
          date: 'Juin 2019',
          // description: 'Lorem ipsum dolor sit amet',
        },
        {
          title: "Bac Sciences et Technologies de l'Industrie et du Développement Durable (STI2D) option SIN",
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
          enterprise: 'Stage, Mes Concierges, Marquise (62250)',
          date: '2019',
          description: "Création d'une marketplace avec l'utilisation d'un framework PHP (Cocorico)",
        },
        {
          title: "Stage en développement web",
          enterprise: "Stage, Mairie d'Echinghen, Echinghen (62360)",
          date: '2018',
          description: "Création d'un site vitrine en utilisant le CMS Wordpress",
        },
        {
          title: "Stage dans une entreprise d'informatique",
          enterprise: 'Stage, Boutique informatique, Boulogne-sur-Mer (62200)',
          date: '2012',
          description: 'Approfondissement des connaissances sur le langage PHP',
        },
      ],
      date: new Date().getFullYear(),
      loading: false,
    }
  },

  methods: {
    download() {
      this.loading = true
      html2canvas(document.querySelector('#cv')).then(canvas => {
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF({
          precision: 1,
          unit: 'px'
        });
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('cv')
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>
.border-before {
  position: relative;
}
.border-before::before {
  content: '';
  height: 4px;
  width: 100px;
  background: rgb(59 130 246);
  position: absolute;
  bottom: -2px;
}
</style>