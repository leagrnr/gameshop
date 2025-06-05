<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Carousel from 'primevue/carousel'
import api from '../services/api'
import GameCard from "@/components/GameCard.vue"

const games = ref([])

onMounted(async () => {
  const res = await api.get('/games')
  games.value = res.data
})
</script>

<template>
  <Carousel
    :value="games"
    :numVisible="3"
    :numScroll="1"
    class="mx-auto w-[95vw]"
    circular
    :autoplayInterval="3000"
  >
    <template #item="slotProps">
      <div class="flex justify-center items-center h-full">
        <GameCard :game="slotProps.data" :key="slotProps.data.id" />
      </div>
    </template>
  </Carousel>
</template>
