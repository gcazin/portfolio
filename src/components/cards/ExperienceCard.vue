<template>
  <AnimateOnScroll>
      <div class="flex flex-col items-center">
        <div class="flex items-center w-full mx-auto" :class="{'justify-end': right, 'justify-start': !right}">
          <div class="w-full lg:w-1/2" :class="{'lg:pl-8': right, 'lg:pr-8': !right}">
            <div class="flex flex-col gap-2 px-4">
              <Text type="subtitle">{{ job }}</Text>
              <Text><img class="inline w-6 mr-2" :src="`/images/companies/${image}`" alt="">{{ company }}</Text>
              <Text>{{ period }}</Text>
              <Text class="text-justify lg:text-left">
                {{ !showFullText ? description.slice(0, 100) : description }} <template v-if="!showFullText">...</template>
                <button v-show="!showFullText" @click="showFullText = true" type="button" class="text-blue-500">Voir plus</button>
                <button v-show="showFullText" @click="showFullText = false" type="button" class="text-blue-500">Voir moins</button>
              </Text>
              <div class="flex gap-x-1 gap-y-2 flex-wrap" v-if="technologies.length">
                <template v-for="(technology, index) in technologies" :key="index">
                  <Badge size="sm">{{ technology }}</Badge>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div
            class="absolute invisible lg:visible flex items-center justify-center w-4 h-4 transform -translate-x-1/2 -translate-y-4 bg-blue-50 border-4 border-blue-500 rounded-full left-1/2 sm:translate-y-0">
        </div>
      </div>
  </AnimateOnScroll>
</template>

<script>
import AnimateOnScroll from "../misc/AnimateOnScroll.vue";
import Badge from "../elements/Badge.vue";
import Subtitle from "../elements/Subtitle.vue";
import Text from "../elements/Text.vue";
import Stringifier from "postcss/lib/stringifier";
export default {
  name: "ExperienceCard",
  components: {Text, Subtitle, Badge, AnimateOnScroll},

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
    },
    technologies: {
      type: Array
    },
    right: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      showFullText: false,
    }
  }
}
</script>

<style scoped>

</style>
