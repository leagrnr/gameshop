<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Carousel from 'primevue/carousel'
import GameCard from './GameCard.vue'
import api from '../services/api'

const games = ref([])

onMounted(async () => {
  const res = await api.get('/games')
  games.value = res.data
})
</script>

<template>
  <Carousel
    :value="games"
    :numVisible="1"
    :numScroll="1"
    class="!w-full mx-auto max-h-[75vh]"
    :responsiveOptions="responsiveOptions"
    circular
    :autoplayInterval="3000"
    :showNavigators="false"
  >
    <template #item="slotProps">
      <img
        :src="`http://localhost:8080/images/${slotProps.data.image.split('/').pop()}`"
        :alt="slotProps.data.name"
        class="w-full h-[75vh] object-cover rounded"
      />
    </template>
  </Carousel>
</template>
