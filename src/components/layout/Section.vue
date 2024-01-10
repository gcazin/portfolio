<script>
import Text from "../elements/Text.vue";
import Button from "../elements/Button.vue";
import Container from "./Container.vue";
export default {
  name: "Section",
  components: {Container, Button, Text},
  props: {
    id: {
      type: String,
    },
    heading: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    hasBackground: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<template>
  <section
      :id="id"
      class="relative overflow border-t border-gray-100 dark:border-gray-800 background"
      :class="{'bg-slate-100 dark:bg-[#0B1120]/95': hasBackground, 'bg-slate-50 dark:bg-[#0B1120]': !hasBackground}"
  >
    <div class="overflow-hidden" v-if="!hasBackground">
      <div class="absolute invisible lg:visible -bottom-20 z-10">
        <img src="/images/misc/blob-tear.svg" class="w-40" alt="">
      </div>
    </div>
    <Container>
      <div class="py-8 lg:py-24">
        <div class="flex flex-col justify-center text-justify lg:text-center items-center">
          <template v-if="title">
            <Text type="heading">{{ heading }}</Text>
            <Text type="title">{{ title }}</Text>
            <div class="container" v-if="description">
              <Text>{{ description }}</Text>
            </div>
          </template>
        </div>

        <div class="my-5">
          <slot></slot>
        </div>
      </div>
    </Container>
    <div class="overflow-hidden">
      <div v-if="hasBackground" class="absolute invisible lg:visible -bottom-20 right-0 z-10">
        <img src="/images/misc/blob-tear.svg" class="w-40" alt="">
      </div>
    </div>
  </section>
</template>

<style scoped>
.background {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23f1f5f9' fill-opacity='0.03' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}
</style>
