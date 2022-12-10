<template>
  <div class="group">
    <div class="h-full relative flex flex-col overflow-hidden items-center bg-white dark:bg-blue-900/50 shadow justify-center p-5 rounded-xl group-hover:bg-blue-500 transition-all duration-250">
      <div class="invisible group-hover:visible z-10 absolute right-0 top-0">
        <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white"></circle>
          <circle opacity="0.08" cx="210" cy="6" r="62" fill="white"></circle>
        </svg>
      </div>
      <Text class="text-blue-500 group-hover:text-white" type="title">{{ title }}</Text>
      <p class="text-xl dark:text-gray-100 group-hover:text-white">{{ description }}</p>
      <div class="invisible group-hover:visible absolute bottom-0 left-0">
        <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="21.262" cy="1.12081" r="1.12081" transform="rotate(90 21.262 1.12081)" fill="white"></circle>
          <circle cx="21.262" cy="30.4863" r="1.12081" transform="rotate(90 21.262 30.4863)" fill="white"></circle>
          <circle cx="1.76005" cy="1.12081" r="1.12081" transform="rotate(90 1.76005 1.12081)" fill="white"></circle>
          <circle cx="1.76005" cy="30.4863" r="1.12081" transform="rotate(90 1.76005 30.4863)" fill="white"></circle>
          <circle cx="11.6228" cy="1.12081" r="1.12081" transform="rotate(90 11.6228 1.12081)" fill="white"></circle>
          <circle cx="11.6228" cy="30.4863" r="1.12081" transform="rotate(90 11.6228 30.4863)" fill="white"></circle>
          <circle cx="21.262" cy="10.9839" r="1.12081" transform="rotate(90 21.262 10.9839)" fill="white"></circle>
          <circle cx="1.76005" cy="10.9839" r="1.12081" transform="rotate(90 1.76005 10.9839)" fill="white"></circle>
          <circle cx="11.6228" cy="10.9839" r="1.12081" transform="rotate(90 11.6228 10.9839)" fill="white"></circle>
          <circle cx="21.262" cy="20.8469" r="1.12081" transform="rotate(90 21.262 20.8469)" fill="white"></circle>
          <circle cx="1.76005" cy="20.8469" r="1.12081" transform="rotate(90 1.76005 20.8469)" fill="white"></circle>
          <circle cx="11.6228" cy="20.8469" r="1.12081" transform="rotate(90 11.6228 20.8469)" fill="white"></circle>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Text from "../elements/Text.vue";
export default {
  name: "Card",
  components: {Text},

  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    }
  }
}
</script>

<style scoped>

</style>
