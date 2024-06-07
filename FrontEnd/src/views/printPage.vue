<template>
    <Card class="col-span-1 mt-2 dark:bg-darkmode-600 shadow-md">
        <div class="border-4 border-black/40 rounded">
            <div class="relative overflow-x-auto">
            <table
                class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
                <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                <tr>
                    <th scope="col" class="px-6 py-3">Producto</th>
                    <th scope="col" class="px-6 py-3">Marca</th>
                    <th scope="col" class="px-6 py-3">Modelo</th>
                    <th scope="col" class="px-6 py-3">Color</th>
                    <th scope="col" class="px-6 py-3">Numero de bien</th>
                    <th scope="col" class="px-6 py-3">Numero de serial</th>
                    <th scope="col" class="px-6 py-3">Ubicacion</th>
                    <th scope="col" class="px-6 py-3">Propietario</th>
                </tr>
                </thead>
                <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                    Apple MacBook Pro 17"
                    </th>
                    <td class="px-6 py-4">Apple</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">Gray</td>
                    <td class="px-6 py-4">7474</td>
                    <td class="px-6 py-4">SN4141477</td>
                    <td class="px-6 py-4">Administracion</td>
                    <td class="px-6 py-4">Norelis</td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                    Microsoft Surface Pro
                    </th>
                    <td class="px-6 py-4">Microsoft</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">Black</td>
                    <td class="px-6 py-4">7475</td>
                    <td class="px-6 py-4">SN4141477</td>
                    <td class="px-6 py-4">Administracion</td>
                    <td class="px-6 py-4">Raquel</td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                    Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">Apple</td>
                    <td class="px-6 py-4">Laptop</td>
                    <td class="px-6 py-4">White</td>
                    <td class="px-6 py-4">7477</td>
                    <td class="px-6 py-4">SN4141477</td>
                    <td class="px-6 py-4">Gerencia</td>
                    <td class="px-6 py-4">Maylimar</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    </Card>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  Input,
  Button,
} from "sigae-components";
</script>
