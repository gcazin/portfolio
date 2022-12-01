<template>
  <div class="flex flex-col gap-5 bg-white dark:bg-gray-800 rounded-lg p-5">
    <div class="flex items-center gap-4">
      <img class="w-1/12 rounded-lg" :src="`images/${image}`" />
      <p class="text-lg dark:text-white">{{ company }} <ion-icon name="link-outline"></ion-icon></p>
    </div>
    <div class="flex items-center justify-between gap-2">
      <p class="text-2xl font-bold dark:text-white">{{ job }}</p>
      <p class="text-gray-500 dark:text-gray-700 text-lg">{{ period }}</p>
    </div>
    <p class="text-gray-600 text-lg">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "ExperienceCard",

  props: {
    image: {
      type: String,
    },
    company: {
      type: String,
    },
    job: {
      type: String,
    },
    period: {
      type: String
    },
    description: {
      type: String,
    }
  }
}
</script>

<style scoped>

</style>
