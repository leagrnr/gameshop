<script setup lang="ts">
defineProps({
  game: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <button class="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
    {{ game.status === 'nouveaute' ? 'Acheter' : 'Précommander' }}
  </button>
</template>

<style scoped>

</style>
