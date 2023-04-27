<template>
  <div class="footer">
    <footer class="bg-dark text-white p-3">
      <h3 class="text-center m-0">{{ fecha }} - JUAN MAYNARD</h3>
    </footer>
  </div>
</template>

<script setup>
const fecha = new Date().getFullYear();
</script>

<style>
@import "../assets/estilosSass.css";
</style>
