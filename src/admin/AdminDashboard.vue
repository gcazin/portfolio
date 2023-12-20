<template>
  <Navbar />

  <Section>

    <div class="mb-4">
      <Text type="title">
        Tableau de bord
        <span class="text-base">(Connecté en tant que <span class="italic">{{ user.email }}</span>)</span>
      </Text>
    </div>
    <div class="flex mb-2">
      <div class="flex-1">
        <Text type="subtitle">Compétences</Text>
      </div>
      <div class="flex-1 text-right">
        <Button size="sm" secondary @click="openForm('skill')">
          {{ !form.skill ? 'Ajouter une compétence' : 'Fermer'}}
        </Button>
      </div>
    </div>
    <div v-if="form.skill === true" class="space-y-2 mb-2">
      <select
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="field.skill.choice"
      >
        <option value="development">Développement</option>
        <option value="tools">Outils</option>
        <option value="workflow">Workflow</option>
      </select>
      <input
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Exemple..."
          v-model="field.skill.name"
      >
      <div class="text-right">
        <Button size="sm" @click="createSkill">Ajouter la compétence</Button>
      </div>
    </div>
    <div class="flex gap-8">
      <div class="flex-1">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-blue-800 uppercase bg-blue-500 dark:bg-gray-900 dark:text-white">
            <tr>
              <th scope="col" class="px-6 py-3">
                Développement ({{ skills.development.length }})
              </th>
            </tr>
            </thead>
            <tbody>
            <template v-if="skills">
              <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  v-for="(skill, index) in skills.development"
                  :key="index"
              >
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ skill.title }}
                </th>
              </tr>
            </template>
            </tbody>
          </table>
        </div>
      </div>
      <div class="flex-1">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-blue-800 uppercase bg-blue-500 dark:bg-gray-900 dark:text-white">
            <tr>
              <th scope="col" class="px-6 py-3">
                Outils ({{ skills.tools.length }})
              </th>
            </tr>
            </thead>
            <tbody>
            <template v-if="skills">
              <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  v-for="(skill, index) in skills.tools"
                  :key="index"
              >
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ skill.title }}
                </th>
              </tr>
            </template>
            </tbody>
          </table>
        </div>
      </div>
      <div class="flex-1">
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-blue-800 uppercase bg-blue-500 dark:bg-gray-900 dark:text-white">
            <tr>
              <th scope="col" class="px-6 py-3">
                Workflow ({{ skills.workflow.length }})
              </th>
            </tr>
            </thead>
            <tbody>
            <template v-if="skills">
              <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  v-for="(skill, index) in skills.workflow"
                  :key="index"
              >
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ skill.title }}
                </th>
              </tr>
            </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Section>

  <Footer has-background />
</template>

<script>
import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";
import Section from "../components/layout/Section.vue";
import Text from "../components/elements/Text.vue";
import {addDoc, collection} from "firebase/firestore"
import db from "../../firebase/init.js";
import Button from "../components/elements/Button.vue";

export default {
  components: {
    Button,
    Text,
    Section,
    Footer,
    Navbar
  },

  data() {
    return {
      user: this.$auth0.user,
      users: [],
      skills: {
        development: [],
        tools: [],
        workflow: [],
      },
      form: {
        skill: false,
      },
      isAuthenticated: this.$auth0.isAuthenticated,
      field: {
        skill: {
          choice: 'development',
          name: '',
        }
      },
      isLoading: this.$auth0.isLoading
    }
  },

  mounted() {
    this.fetchDevelopmentSkills()
  },

  methods: {
    async createSkill() {
      const colRef = collection(db, `skills.${this.field.skill.choice}`)

      await addDoc(colRef, {
        title: this.field.skill.name
      })

      await this.fetchDevelopmentSkills()
    },
    async fetchDevelopmentSkills() {
      this.skills.development = await this.databaseService.getCollection('skills.development')
      this.skills.tools = await this.databaseService.getCollection('skills.tools')
      this.skills.workflow = await this.databaseService.getCollection('skills.workflow')
    },
    openForm(name) {
      this.form[name] = !this.form[name]
    }
  }
};
</script>