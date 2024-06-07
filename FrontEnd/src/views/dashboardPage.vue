<template>
  <Card>
    <div class="p-2 rounded w-72 font-bold capitalize border-2 grid gap-3">
      <div class="grid grid-col gap-3 mb-7">
        <span class="capitalize text-center">pc</span>
      </div>
      <div class="grid gap-3">
        <div class="grid grid-cols-2 gap-3">
            <span class="border-2 rounded p-1">Apple</span>
            <span class="border-2 rounded p-1">Laptop</span>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <span class="border-2 rounded p-1">N.7474</span>
            <span class="border-2 rounded p-1">SN4141477</span>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <span class="border-2 rounded p-1">Administracion</span>
            <span class="border-2 rounded p-1">Norelis</span>
        </div>
      </div>
      <img src="https://picsum.photos/300">
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
