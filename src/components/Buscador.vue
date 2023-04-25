<template>
  <div>
    <form class="container" @submit.prevent="ejecutarPeticion">
      <div class="mb-3">
        <input type="text" class="form-control" v-model.trim="buscar" />
      </div>
      <button type="submit" class="btn btn-success">BUSCAR</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(props, { emit }) {
    // PARA QUE FUNCIONE EL EMIT SI O SI TENGO QUE AGREGAR PROPS
    const buscar = ref("");

    const ejecutarPeticion = () => {
      if (buscar.value === "") {
        console.log("vacio pa");
      } else {
        emit("accion", buscar.value);
      }
      buscar.value = "";
    };

    return { buscar, ejecutarPeticion };
  },
};
</script>

<style>
.btn {
  width: 100%;
}
</style>