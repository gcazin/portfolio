<template>
<!--  <svg v-if="hasBackground" class="-mt-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#111827" fill-opacity="1" d="M0,256L1440,224L1440,320L0,320Z"></path></svg>-->
  <!-- :class="{'bg-slate-50 dark:bg-gray-900': hasBackground, 'bg-white dark:bg-gray-800': !hasBackground}" -->
  <div :id="id" class="relative overflow" :class="{'bg-slate-50 dark:bg-gray-900': hasBackground, 'bg-white dark:bg-gray-800': !hasBackground}">
    <div class="overflow-hidden">
      <div v-if="!hasBackground" class="absolute -bottom-16 z-10">
        <img src="/images/blob-tear.svg" class="w-40" alt="">
      </div>
    </div>
    <div class="relative w-8/12 m-auto py-16">
      <div class="relative flex flex-col justify-center text-center items-center">
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
    <div class="overflow-hidden">
      <div v-if="hasBackground" class="absolute -bottom-16 right-0 z-10">
        <img src="/images/blob-tear.svg" class="w-40" alt="">
      </div>
    </div>
  </div>
<!--  <svg v-if="hasBackground" class="-mt-16" style="transform: scaleX(-1);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#111827" fill-opacity="1" d="M0,160L1440,96L1440,0L0,0Z"></path></svg>-->
</template>

<script>
import Title from "../elements/Title.vue";
import Text from "../elements/Text.vue";
import Button from "../elements/Button.vue";
export default {
  name: "Section",
  components: {Button, Text, Title},
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

<style scoped>
.custom-shape-divider-top-1669934790 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1669934790 svg {
  position: relative;
  display: block;
  width: calc(300% + 1.3px);
  height: 73px;
  transform: rotateY(180deg);
}

.custom-shape-divider-top-1669934790 .shape-fill {
  fill: #FFFFFF;
}
</style>
