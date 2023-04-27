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

<style>
@import "./assets/estilosSass.css";
</style>
