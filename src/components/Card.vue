<template>
  <div class="card">
    <img loading="lazy" :src="data.images.downsized.url" alt="gifs y stickers" />

    <div>
      <h5 class="card-title bg-black text-white">{{ data.title }}</h5>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ data: Object, require: true });
</script>

<style>
@import "../assets/estilosSass.css";
</style>
