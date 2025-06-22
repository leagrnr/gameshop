<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Carousel from 'primevue/carousel'
import api from '../services/api'

const games = ref([])
const imageBaseUrl = import.meta.env.VITE_BASE_URL.replace('/api', '') + '/images/'

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
    circular
    :autoplayInterval="3000"
    :showNavigators="false"
  >
    <template #item="slotProps">
      <img
        :src="`${imageBaseUrl}${slotProps.data.image}`"
        :alt="slotProps.data.name"
        class="w-full h-[75vh] object-cover rounded"
      />
    </template>
  </Carousel>
</template>
