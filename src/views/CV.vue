<template>
  <Navbar />

  <Section title="CV">
    <div class="max-w-4xl mx-auto">
      <Button class="mb-7 text-center">Version pdf téléchargeable</Button>
      <div class="rounded-lg shadow-lg">
        <!-- First section -->
        <div class="flex">
          <div class="w-72 bg-gray-700 rounded-tl-lg">
            <img class="m-auto w-full rounded-tl-lg" src="/images/misc/me.jpg" alt="Photo de profil">
          </div>
          <div class="flex justify-center gap-6 bg-gray-100 flex-col p-7 flex-1 rounded-tr-lg">
            <div class="">
              <span class="uppercase text-5xl font-bold">Guillaume Cazin</span>
            </div>
            <div>
              <span class="text-3xl">Développeur web</span>
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi cum dignissimos
              doloribus expedita, fugiat harum ipsam maiores nam natus nesciunt nobis ratione rem, repellendus sunt
              temporibus unde vitae voluptas!
            </div>
          </div>
        </div>

        <!-- Second section -->
        <div class="flex">
          <div class="py-7 px-6 w-72 bg-gray-100 rounded-bl-lg">
            <div class="flex flex-col gap-6">
              <div class="flex-1">
                <span class="border-before font-bold text-lg border-b-2 border-blue-300 block uppercase pb-2">
                  Contact
                </span>
                <div class="flex flex-col gap-1 mt-2">
                  <p><Icon name="mail" class="mr-1" /> czn.guillaume@gmail.com</p>
                  <p><Icon name="call" class="mr-1" /> 06.10.85.42.18</p>
                  <p><Icon name="logo-linkedin" class="mr-1" :outline="false" /> guillaume-cazin</p>
                  <p><Icon name="logo-github" class="mr-1" :outline="false" /> gcazin</p>
                  <p><Icon name="logo-codepen" class="mr-1" :outline="false" /> gcazin</p>
                </div>
              </div>
              <div class="flex-1">
                <span class="border-before font-bold text-lg border-b-2 border-blue-300 block uppercase pb-2">
                  Compétences
                </span>
                <div class="flex flex-wrap gap-x-1 gap-y-2 mt-3">
                  <span class="bg-gray-200 text-gray-700 rounded-lg px-2 py-1 text-sm">HTML5</span>
                  <span class="bg-gray-200 text-gray-700 rounded-lg px-2 py-1 text-sm">CSS3</span>
                  <span class="bg-gray-200 text-gray-700 rounded-lg px-2 py-1 text-sm">SCSS</span>
                  <span class="bg-gray-200 text-gray-700 rounded-lg px-2 py-1 text-sm">Javascript</span>
                  <span class="bg-gray-200 text-gray-700 rounded-lg px-2 py-1 text-sm">VueJS</span>
                  <span class="bg-gray-200 text-gray-700 rounded-lg px-2 py-1 text-sm">jQuery</span>
                  <span class="bg-gray-200 text-gray-700 rounded-lg px-2 py-1 text-sm">PHP</span>
                  <span class="bg-gray-200 text-gray-700 rounded-lg px-2 py-1 text-sm">Laravel</span>
                  <span class="bg-gray-200 text-gray-700 rounded-lg px-2 py-1 text-sm">Wordpress</span>
                  <span class="bg-gray-200 text-gray-700 rounded-lg px-2 py-1 text-sm">Drupal</span>
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
          <div class="flex-1 bg-white rounded-br-lg">
            <div class="flex flex-col gap-6 p-7">
              <div class="flex-1">
                <span class="border-before font-bold text-lg border-b-2 border-blue-300 block uppercase pb-2">
                  Formations & diplômes
                </span>

                <div class="flex flex-col gap-1">
                  <div class="flex mt-3">
                    <div class="flex flex-col flex-1">
                      <div class="flex-1">
                      <span class="text-xl">
                        Développeur web
                      </span>
                      </div>
                      <div class="flex-1">
                        <div class="text-gray-500">
                          Diatem
                        </div>
                      </div>
                      <div class="flex-1">
                        <div class="text-md text-gray-700">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi cum dignissimos
                          doloribus expedita.
                        </div>
                      </div>
                    </div>
                    <div class="w-32 text-end">2020-2022</div>
                  </div>
                  <!--                  <div class="flex mt-3">
                                      <div class="flex flex-col flex-1">
                                        <div class="flex-1">
                                        <span class="text-lg">
                                          Développeur web
                                        </span>
                                        </div>
                                        <div class="flex-1">
                                          Diatem
                                        </div>
                                        <div class="flex-1">
                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi cum dignissimos
                                          doloribus expedita.
                                        </div>
                                      </div>
                                      <div class="w-32 text-end">2020-2022</div>
                                    </div>-->
                </div>
              </div>
              <div class="flex-1">
                <div class="border-before font-bold text-lg border-b-2 border-blue-300 block uppercase pb-2">
                  Expériences professionnelles
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

export default {
  name: "CV",
  components: {Button, Footer, Section, Navbar, Icon}
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