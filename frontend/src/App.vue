<script setup>
import { ref, onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import CarouselBanner from './components/CarouselBanner.vue'
import GameCard from "@/components/GameCard.vue"
import CarouselProduct from "@/components/CarouselProduct.vue"
import api from "@/services/api"

const games = ref([])

onMounted(async () => {
  const res = await api.get('/games')
  games.value = res.data
})
</script>

<template>
  <NavBar />
  <CarouselBanner />
  <CarouselProduct />
</template>
