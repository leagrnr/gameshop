<script setup>
defineProps({
  game: {
    type: Object,
    required: true
  }
})

const baseUrl = import.meta.env.VITE_BASE_URL;
</script>

<template>
  <div class="relative max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-900 text-white">
    <img class="w-full" :src="`http://localhost:8080/images/${game.image.split('/').pop()}`" :alt="game.name" />
    <div class="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-purple-600/70 to-transparent pointer-events-none z-10"></div>
    <div class="absolute inset-0 p-6 flex flex-col justify-end z-20">
      <h2 class="text-lg font-bold text-center">{{ game.name }}</h2>
      <p class="text-md font-bold mt-1 text-center">{{ game.price }}€</p>
      <button class="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
        ACHETER
      </button>
    </div>
  </div>
</template>
