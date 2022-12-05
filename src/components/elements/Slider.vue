<template>
  <AnimateOnScroll>
    <div class="slides">
      <transition-group
          name="slide"
          mode="out-in"
          enter-class="slide-in"
          leave-class="slide-out"
          enter-active-class="animated slide-in-active"
          leave-active-class="animated slide-out-active"
      >
        <div v-for="(slide, index) in slides" :key="index">
          <template v-if="index === active">
            <div>
              <img class="rounded-lg w-full max-w-5xl" :src="slide.image" :alt="slide.title">
              <div class="py-5">
                <Title>{{ slide.title }}</Title>
                <Text>{{ slide.description }}</Text>
              </div>
            </div>
          </template>
        </div>
      </transition-group>
    </div>
    <div class="flex items-center gap-3">
      <div class="flex-auto" @click="move(-1)">
        <div class="prev ml-auto">
          <ion-icon class="text-xl" name="chevron-back-outline"></ion-icon>
        </div>
      </div>
      <div class="flex-auto" @click="move(1)">
        <div class="next mr-auto">
          <ion-icon class="text-xl" name="chevron-forward-outline"></ion-icon>

        </div>
      </div>
    </div>
    <!--  <ul class="dots">
        <li
            v-for="(dot, index) in slides"
            :class="{ active: ++index === active }"
            @click="jump(index)"
        ></li>
      </ul>-->
  </AnimateOnScroll>
</template>

<script>
import Title from "./Title.vue";
import Text from "./Text.vue";
import AnimateOnScroll from "../misc/AnimateOnScroll.vue";
export default {
  name: "Slider",
  components: {AnimateOnScroll, Text, Title},
  data() {
    return {
      slides: [
        {
          image: 'images/hello.gif',
          title: 'AutoSortingSpotifyLikedSongs',
          description: 'Oui',
        },
        {
          image: '',
          title: 'Windows 10 in pure CSS',
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
  width: 50px;
  height: 50px;
  border: 2px solid #221e21;
  color: #221e21;
  border-radius: 50%;
  cursor: pointer;
  line-height: 48px;
  text-align: center;
  text-indent: -2px;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.prev:hover,
.next:hover {
  background: #221e21;
  color: #fff;
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