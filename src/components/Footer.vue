<template>
  <div class="footer">
    <footer class="bg-dark text-white py-1">
      <h3 class="text-center">{{ fecha }} - HECHO POR JUAN MAYNARD</h3>
    </footer>
  </div>
</template>

<script setup>
const fecha = new Date().getFullYear();
</script>

<style>
.footer {
  padding-top: 1rem;
}
</style>
