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
  <div class="w-full max-w-[100vw]">
    <Carousel
      :value="games"
      :numVisible="1"
      :numScroll="1"
      class="w-full"
      circular
      :autoplayInterval="3000"
      :showNavigators="false"
    >
      <template #item="slotProps">
        <img
          :src="`${imageBaseUrl}${slotProps.data.image}`"
          :alt="slotProps.data.name"
          class="w-full h-[75vh] md:h-[65vh] sm:h-[50vh] xs:h-[40vh] object-cover rounded transition duration-300"
        />
      </template>
    </Carousel>
  </div>
</template>
