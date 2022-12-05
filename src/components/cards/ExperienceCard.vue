<template>
  <AnimateOnScroll>
      <div class="flex flex-col items-center">
        <div class="flex items-center w-full mx-auto" :class="{'justify-end': right, 'justify-start': !right}">
          <div class="w-full lg:w-1/2 lg:pr-8">
            <div class="flex flex-col gap-3 p-4">
              <Subtitle>{{ job }}</Subtitle>
              <SecondaryText><img class="inline w-6 mr-3" :src="`images/${image}`" alt="">{{ company }}</SecondaryText>
              <Badge>{{ period }}</Badge>
              <Text>{{ description }}</Text>
            </div>
          </div>
        </div>
        <div
            class="absolute flex items-center justify-center w-5 h-5 transform -translate-x-1/2 -translate-y-4 bg-blue-50 border-2 border-blue-500 rounded-full left-1/2 sm:translate-y-0">
        </div>
      </div>
  </AnimateOnScroll>
</template>

<script>
import SecondaryText from "../elements/SecondaryText.vue";
import AnimateOnScroll from "../misc/AnimateOnScroll.vue";
import Badge from "../elements/Badge.vue";
import Subtitle from "../elements/Subtitle.vue";
import Text from "../elements/Text.vue";
export default {
  name: "ExperienceCard",
  components: {Text, Subtitle, Badge, AnimateOnScroll, SecondaryText},
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
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
