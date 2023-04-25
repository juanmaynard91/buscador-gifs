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
.card {
  align-items: center;
  background-color: #000;
  display: flex;
  justify-content: center;
}
.card-title {
  align-items: center;
  display: flex;
  height: 4rem;
  justify-content: center;
  text-transform: uppercase;
}
img {
  border-radius: 5px;
  height: 20rem;
  width: 20rem;
}
</style>
