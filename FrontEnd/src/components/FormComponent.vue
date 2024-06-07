<template>
  <div class="grid grid-cols-2 gap-6">
    <Card class="col-span-1 mt-2 dark:bg-darkmode-600 shadow-md">
      <CardHeader>
        <h2
          class="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center"
        >
          Formulario
        </h2>
      </CardHeader>

      <CardContent>
        <!--EQUIPO-->
        <div class="grid grid-col gap-3 mb-7">
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Seleccione el Equipo</option>
            <option value="PC">PC</option>
            <option value="MONITOR">Monitor</option>
            <option value="UPS">UPS</option>
            <option value="IMPRESORA">Impresora</option>
            <option value="ESCANER">Escaner</option>
            <option value="RADIO">Radio</option>
            <option value="PANTALLA">Pantalla</option>
          </select>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <Input type="text" placeholder="Marca del Equipo" />
          <Input type="text" placeholder="Modelo del Equipo" />
        </div>
        <!--PROPIEDADES DE EQUIPO-->
        <Input type="text" placeholder="Escriba el color del equipo" />
        <div class="grid grid-cols-2 gap-3">
          <Input type="text" placeholder="Escriba el numero de bien" />
          <Input type="text" placeholder="Escriba el serial del equipo" />
        </div>
        <!--UBICACION-->
        <div class="grid grid-cols-2 gap-3">
          <div>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Seleccione la ubicacion</option>
              <option value="AVI">Aviacion General</option>
              <option value="OPE">Centro de Operacion</option>
              <option value="INF">Infraestructura</option>
              <option value="TIC">Tecnologia</option>
              <option value="ADM">Administracion</option>
              <option value="RECAU">Recaudacion</option>
              <option value="PREN">Prensa</option>
            </select>
          </div>
          <Input type="text" placeholder="Aquien pertenece el Equipo" />
        </div>

        <!-- Campo para insertar texto para ser guardado en la base de datos -->
        <Button @click="addNewNotes()">agregar</Button>
        <!-- Agregar la informacion del campo en la base de datos -->
      </CardContent>
      <CardFooter> </CardFooter>
    </Card>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  Input,
  Button,
} from "sigae-components";
import { onMounted, ref } from "vue";

const formNotes = ref("");
const notes = ref([]);

const API_URL = "http://localhost:3000/";

//funcion para agregar nuevas notas
const addNewNotes = async () => {
  axios
    .post(API_URL + "api/baer-db/AddNotes", {
      //se define los campos del formulario
      description: formNotes.value,
    })
    .then((response) => {
      //si todo sale bien actualizar la listra y mostar alerta
      refreshData();
      alert(response.data);
    });
};
/*/funcion para eliminar las notas
const deleteNotes = async (id: string) => {
  //se pasa el id por la ruta
  axios.delete(API_URL + "api/baer-db/DeleteNotes/" + id).then((response) => {
    //si todo sale bien actualizar la listra y mostar alerta
    refreshData();
    alert(response.data);
  });
};*/

//funcion para obtener las lista de notas
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

<style scoped></style>
