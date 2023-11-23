<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap items-center justify-center gap-12">
    <template v-for="(reference, index) in references" :key="index">
      <img :src="`/images/references/${reference.image}.png`" class="m-auto lg:text-inherit opacity-30 hover:opacity-100 grayscale hover:grayscale-0 transition-all w-32" :alt="reference.name">
    </template>
  </div>
</template>

<script>
export default {
  name: "References",

  data() {
    return {
      references: [
        {
          name: 'Eléphant bleu',
          image: 'elephant-bleu'
        },
        {
          name: 'Eurométropole Strasbourg',
          image: 'eurometropole-strasbourg'
        },
        {
          name: 'Institut Henry Poincaré',
          image: 'ihp'
        },
        {
          name: 'Wolfberger',
          image: 'wolfberger'
        },
        {
          name: 'iTurf',
          image: 'iturf'
        },
        {
          name: 'DDEC',
          image: 'ddec'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>