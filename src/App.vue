<template>
  <div id="nav">
    <Navbar v-once />
    <!-- keep-alive para que la api se cargue desde la cache y no tenga que cargar todo de nuevo -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <button class="button" v-show="showButton" @click="scrollToTop"><i class="bi bi-arrow-up"></i></button>
    <Footer v-once />
  </div>
</template>

<script setup>
import Footer from "../src/components/Footer.vue";
import Navbar from "../src/components/Navbar";
import { ref, onMounted } from "vue";

const showButton = ref(false);

//boton para subir al inicio de la pagina
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleScroll = () => {
  showButton.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<style lang="scss">
#app {
  background-color: #000;
  font-family: Oswald, sans-serif;
  text-align: center;
}

#nav {
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.button {
  background-color: #42b983;
  border-radius: 5px;
  border: none;
  bottom: 10px;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  position: fixed;
  right: 10px;
  transition: opacity 0.3s;
}
.button.hidden {
  opacity: 0;
}

::-webkit-scrollbar {
  background: linear-gradient(to top, #8e9eab, #eef2f3);
  width: 12px;
}
::-webkit-scrollbar-track {
  background: linear-gradient(to top, #8e9eab, #eef2f3);
  border-radius: 12px;
}
::-webkit-scrollbar-thumb {
  background-color: #42b983;
  border-radius: 12px;
}
</style>
