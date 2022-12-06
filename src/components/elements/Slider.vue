<template>
  <AnimateOnScroll>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div v-for="(slide, index) in slides" :key="index">
        <div class="group relative bg-slate-50 rounded-xl hover:bg-blue-500 transition-colors hover:text-white group-hover:bg-blue-500">
          <img class="rounded-xl" :src="slide.image" :alt="slide.title">
          <div
              class="
                overflow-hidden
                rounded-xl
                group-hover:transition-colors
                invisible group-hover:visible
                group-hover:bg-blue-500/90 group-hover:!text-white group-hover:text-lg
                absolute p-5 h-full w-full z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
              "
          >
            <div class="absolute right-0 top-0">
              <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white"></circle>
                <circle opacity="0.08" cx="210" cy="6" r="62" fill="white"></circle>
              </svg>
            </div>
            <div class="flex flex-col gap-3 items-center justify-center h-full">
              <p>{{ slide.title }}</p>
              <p>{{ slide.description }}</p>
              <ul class="flex gap-1">
                <li
                    v-for="(technology, index) in slide.technologies"
                    :key="index"
                >
                  <Badge secondary>{{ technology }}</Badge>
                </li>
              </ul>
            </div>
            <div class="absolute bottom-0 left-0">
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
      </div>
    </div>
  </AnimateOnScroll>
</template>

<script>
import Text from "./Text.vue";
import AnimateOnScroll from "../misc/AnimateOnScroll.vue";
import Badge from "./Badge.vue";
export default {
  name: "Slider",
  components: {
    Badge,
    AnimateOnScroll,
    Text
  },

  data() {
    return {
      slides: [
        {
          image: '/images/hello.gif',
          title: 'AutoSortingSpotifyLikedSongs',
          description: 'Oui',
          technologies: ['VueJS', 'API']
        },
        {
          image: '/images/hello.gif',
          title: 'AutoSortingSpotifyLikedSongs',
          description: 'Oui',
        },
        {
          image: '/images/hello.gif',
          title: 'AutoSortingSpotifyLikedSongs',
          description: 'Oui',
        },
        {
          image: '/images/hello.gif',
          title: 'AutoSortingSpotifyLikedSongs',
          description: 'Oui',
        },
        {
          image: '/images/hello.gif',
          title: 'AutoSortingSpotifyLikedSongs',
          description: 'Oui',
        },
        {
          image: '/images/hello.gif',
          title: 'AutoSortingSpotifyLikedSongs',
          description: 'Oui',
        },
      ],
      active: 0
    }
  },

  methods: {
    move(amount) {
      let newActive
      const newIndex = this.active + amount
      if (newIndex > this.slides.length) {
        newActive = 1
      }
      if (newIndex === 0) {
        newActive = 0
      }
      this.active = newActive || newIndex
    },
    jump(index) {
      this.active = index
    },
  }
}
</script>

<style scoped>
.prev,
.next {
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.prev:hover,
.next:hover {
  transform: scale(1.2);
}
.prev:active,
.next:active {
  transform: translate(0, 3px) scale(1.2);
}

.dots {
  position: fixed;
  display: block;
  width: 100%;
  text-align: center;
  bottom: 20px;
}
.dots li {
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: #221e21;
  opacity: 0.2;
  display: inline-block;
  margin: 0 3px;
  cursor: pointer;
  transition: opacity 0.4s ease-in-out, width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.dots li.active {
  width: 22px;
  opacity: 1;
}

.slides {
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
.slides .animated {
  transition: all 400ms;
  position: absolute;
  transform: translate(-50%, -50%);
}
.slides .slide-in {
  opacity: 0;
  transform: translate(-40%, -50%);
}
.slides .slide-in-active {
  transition-delay: 150ms;
}
.slides .slide-out {
  opacity: 1;
}
.slides .slide-out-active {
  opacity: 0;
  transform: translate(-60%, -50%);
}

.buttons {
  position: absolute;
  top: 10px;
  left: 10px;
}

button {
  padding: 10px;
  outline: none;
  border: none;
  -webkit-appearance: none;
  background: #221e21;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
}
button:disabled {
  opacity: 0.2;
  cursor: no-drop;
}
</style>
