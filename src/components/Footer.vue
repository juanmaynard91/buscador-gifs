<template>
  <div class="footer">
    <footer class="bg-dark text-white p-3">
      <h3 class="text-center m-0">{{ fecha }} - JUAN MAYNARD</h3>
      <!--<button class="btn btn-success" @click="compartir">Compartir proyecto <i class="bi bi-share-fill"></i></button>-->
    </footer>
  </div>
</template>

<script setup>
const fecha = new Date().getFullYear();

/*const compartir = () => {
  if (navigator.share) {
    navigator.share({
      title: "compartir en redes sociales",
      text: "gracias pa :D",
      url: "https://github.com/juanmaynard91/buscador-gifs",
    });
  } else {
    navigator.clipboard.writeText("link copiado!");
  }
};*/
</script>

<style>
@import "../assets/estilosSass.css";
</style>
