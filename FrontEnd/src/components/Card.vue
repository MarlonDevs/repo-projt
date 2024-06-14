<template id="app">
  <div class="p-2 rounded w-72 font-bold capitalize grid gap-3 shadow-lg border-2" v-for="note in notes">
    <div class="grid grid-col gap-3 border-b-2  border-black">
      <span class="capitalize text-center text-xl">{{device}}</span>
    </div>
    <div class="grid gap-3">
      <div class="grid grid-cols-2 gap-3">
        <span class="p-1 text-black/70 font-semibold text-sm" >{{ brand }}</span>
        <span class="p-1 text-black/70 font-semibold text-sm" >{{ model }}</span>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <span class="p-1 text-black/70 font-semibold text-sm" >{{ assetNumber }}</span>
        <span class="p-1 text-black/70 font-semibold text-sm" >{{ serial }}</span>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <span class="p-1 text-black/70 font-semibold text-sm" >{{ location }}</span>
        <span class="p-1 text-black/70 font-semibold text-sm" >{{ user }}</span>
      </div>
    </div>
    <img src="https://picsum.photos/300" />
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";

const notes = ref([]);

const refreshData = async () => {
  axios.get(API_URL + "api/baer-db/GetNotes").then((response) => {
    //actualizar la variable con la respuesta del servidor
    notes.value = response.data;
  });
};
//al cargar la pagina obtener el listado de notas
onMounted(() => {
  refreshData();
});
</script>
