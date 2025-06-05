<script setup>
import { ref, onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import Carousel from './components/Carousel.vue'
import GameCard from "@/components/GameCard.vue"
import api from "@/services/api"

const games = ref([])

onMounted(async () => {
  const res = await api.get('/games')
  games.value = res.data
})
</script>

<template>
  <NavBar />
  <Carousel />
  <div class="flex flex-wrap gap-8 justify-center mt-8">
    <GameCard
      v-for="game in games"
      :key="game.id"
      :game="game"
    />
  </div>
</template>
