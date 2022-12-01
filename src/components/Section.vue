<template>
  <div :id="id" :class="{'bg-slate-50 dark:bg-gray-900': hasBackground, 'bg-white dark:bg-gray-800': !hasBackground}">
    <div class="relative w-8/12 m-auto py-16">
      <div
          class="relative flex items-center"
          :class="{
            'flex-row justify-between': hasButton,
            'flex-col justify-center': !hasButton,
            'py-16': title || description
          }"
      >
        <template v-if="title">
          <Title :text="title" data-aos="zoom-in" data-aos-duration="1000"/>
          <template v-if="hasButton">
            <slot name="button"></slot>
          </template>
          <div class="container" v-if="description">
            <Paragraph :text="description" data-aos="zoom-in" data-aos-duration="1000"/>
          </div>
        </template>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<script>
import Title from "./Title.vue";
import Paragraph from "./Paragraph.vue";
import Button from "./Button.vue";
export default {
  name: "Section",
  components: {Button, Paragraph, Title},
  props: {
    id: {
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
    hasButton: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>

</style>
