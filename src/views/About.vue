<template>
  <div class="container">
    <img alt="Vue logo" loading="lazy" src="../assets/logo.png" style="width: 10rem; height: 10rem" />
    <h1 class="text-white">BUSCADOR DE STICKERS</h1>

    <Buscador @accion="obtenerStickers" class="mb-4" />

    <div class="row">
      <div class="col" v-for="sticker in stickers" :key="sticker.id">
        <Card :data="sticker" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "../components/Card";
import Buscador from "../components/Buscador";
import { ref } from "vue";

const stickers = ref({});
const limit = 28;

const obtenerStickers = async (search = "DBZ") => {
  try {
    const res = await fetch(`https://api.giphy.com/v1/stickers/search?q=${search}&api_key=8DzXku6215DmtAiEngS54kVEfdzsa3Cu&limit=${limit}`);
    const data = await res.json();
    stickers.value = data.data;
    //console.log(data.data)
  } catch (error) {
    console.log(error);
  }
};

obtenerStickers();
</script>

<style>
</style>