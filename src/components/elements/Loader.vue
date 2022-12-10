<template>
<div v-show="loading" class="bg-gray-50 h-full w-full z-50 fixed top-0 bottom-0 left-0 right-0">
  <div class="flex flex-col justify-center items-center h-full w-full">
    <div class='cssload-loader'>
      <div class='cssload-inner cssload-one border-b-4 border-blue-800'></div>
      <div class='cssload-inner cssload-two border-r-4 border-blue-700'></div>
      <div class='cssload-inner cssload-three border-t-4 border-blue-500'></div>
    </div>
    <div class="mt-3">
      <Text class="font-bold">Chargement...</Text>
    </div>
  </div>
</div>
</template>

<script>
import Text from "./Text.vue";
import Icon from "./Icon.vue";

export default {
  name: "Loader",
  components: {Icon, Text},

  data() {
    return {
      loading: false,
    }
  },

  mounted() {
    this.loading = true
    window.onload = () => {
      this.loading = false
    };
  }
}
</script>

<style scoped>
.cssload-loader {
  position: relative;
  width: 100px;
  height: 100px;
  perspective: 780px;
}

.cssload-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border-radius: 50%;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
}
.cssload-inner.cssload-one {
  left: 0%;
  top: 0%;
  animation: cssload-rotate-one 1.15s linear infinite;
  -o-animation: cssload-rotate-one 1.15s linear infinite;
  -ms-animation: cssload-rotate-one 1.15s linear infinite;
  -webkit-animation: cssload-rotate-one 1.15s linear infinite;
  -moz-animation: cssload-rotate-one 1.15s linear infinite;
}
.cssload-inner.cssload-two {
  right: 0%;
  top: 0%;
  animation: cssload-rotate-two 1.15s linear infinite;
  -o-animation: cssload-rotate-two 1.15s linear infinite;
  -ms-animation: cssload-rotate-two 1.15s linear infinite;
  -webkit-animation: cssload-rotate-two 1.15s linear infinite;
  -moz-animation: cssload-rotate-two 1.15s linear infinite;
}
.cssload-inner.cssload-three {
  right: 0%;
  bottom: 0%;
  animation: cssload-rotate-three 1.15s linear infinite;
  -o-animation: cssload-rotate-three 1.15s linear infinite;
  -ms-animation: cssload-rotate-three 1.15s linear infinite;
  -webkit-animation: cssload-rotate-three 1.15s linear infinite;
  -moz-animation: cssload-rotate-three 1.15s linear infinite;
}

@keyframes cssload-rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}
@-webkit-keyframes cssload-rotate-one {
  0% {
    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}
@keyframes cssload-rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}
@-webkit-keyframes cssload-rotate-two {
  0% {
    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}
@keyframes cssload-rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
@-webkit-keyframes cssload-rotate-three {
  0% {
    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>
