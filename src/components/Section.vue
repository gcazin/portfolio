<template>
  <div :class="{'bg-slate-50': hasBackground, 'bg-white': !hasBackground}">
    <div class="relative w-8/12 m-auto pb-16">
      <div class="relative flex flex-col items-center justify-center py-16">
        <template v-if="title">
          <Title :text="title" data-aos="zoom-in" data-aos-duration="1000"/>
          <div class="container">
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
export default {
  name: "Section",
  components: {Paragraph, Title},
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    hasBackground: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>

</style>