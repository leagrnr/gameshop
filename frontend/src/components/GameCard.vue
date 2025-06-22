<script setup>
import Button from './Button.vue'

defineProps({
  game: {
    type: Object,
    required: true
  }
})

const imageBaseUrl = import.meta.env.VITE_BASE_URL.replace('/api', '') + '/images/'
</script>

<template>
  <div class="relative w-[30vw] h-[35vh] rounded-2xl overflow-hidden shadow-lg bg-gray-900 text-white flex">
    <img
      class="absolute inset-0 w-full h-full object-cover"
      :src="`${imageBaseUrl}${game.image}`"
      :alt="game.name"
    />
    <div class="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-purple-600/70 to-transparent pointer-events-none z-10"></div>
    <div class="absolute inset-0 p-6 flex flex-col justify-end z-20">
      <h2 class="text-lg font-bold text-center">{{ game.name }}</h2>
      <p class="text-md font-bold mt-1 text-center">{{ game.price }}€</p>
      <Button :game="game" />
    </div>
  </div>
</template>
