<template>
  <div class="container">
    <img alt="Vue logo" loading="lazy" src="../assets/logo.png" style="width: 10rem; height: 10rem" />
    <h1 class="text-white">BUSCADOR DE GIFS</h1>

    <Buscador @accion="obtenerGifs" class="mb-4" />

    <div class="row">
      <div class="col" v-for="gif in gifs" :key="gif.id">
        <Card :data="gif" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "../components/Card.vue";
import Buscador from "../components/Buscador";
import { ref } from "vue";

const gifs = ref({});
const search = "DBZ";
const limit = 30;

const obtenerGifs = async () => {
  try {
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=8DzXku6215DmtAiEngS54kVEfdzsa3Cu&limit=${limit}`);
    const data = await res.json();
    gifs.value = data.data;
    //console.log(data.data)
  } catch (error) {
    console.log(error);
  }
};

obtenerGifs();
</script>

<style>
</style>