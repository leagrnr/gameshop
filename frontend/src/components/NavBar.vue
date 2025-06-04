<script setup>
import InputText from 'primevue/inputtext';
</script>

<template>
  <nav class="flex justify-between items-center h-[5vh] w-full px-12 bg-white/20 backdrop-blur-md fixed top-0 left-0 z-50">
    <div class="flex items-center">
      <h1 class="text-purple-500 text-xl">GS</h1>
    </div>

    <ul class="flex space-x-6 font-medium">
      <li>Accueil</li>
      <li>Jeux</li>
      <li>Magasins</li>
    </ul>

    <div class="flex items-center space-x-2 !bg-gray-300 !rounded-md !px-2 !h-[70%] !text-black">
      <i class="pi pi-search" />
      <InputText
        v-model="search"
        placeholder="Recherche..."
        class="h-[70%] w-full max-w-xs border px-3 rounded-md focus:ring-2 focus:ring-blue-300"
      />
    </div>

    <div class="flex items-center space-x-4">
      <i class="pi pi-user" />
      <i class="pi pi-shopping-cart" />
      <div class="flex items-center space-x-1">
        <i class="pi pi-globe" />
        <p>FR</p>
      </div>
    </div>
  </nav>

</template>

