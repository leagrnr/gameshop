<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Carousel from 'primevue/carousel'
import GameCard from "@/components/GameCard.vue"
import api from '../services/api'

const nouveautes = ref([])
const prochainesSorties = ref([])

onMounted(async () => {
  const res = await api.get('/games')
  const allGames = res.data

  nouveautes.value = allGames.filter(game => game.status === 'nouveaute')
  prochainesSorties.value = allGames.filter(game => game.status === 'prochaine_sortie')
})
</script>

<template>
  <div class="space-y-12 px-4 py-8">
    <!-- Section Nouveautés -->
    <section>
      <h2 class="text-3xl font-bold text-white mb-4">Nouveautés</h2>
      <Carousel
        :value="nouveautes"
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
    </section>

    <!-- Section Prochaines Sorties -->
    <section>
      <h2 class="text-3xl font-bold text-white mb-4">Prochaines sorties</h2>
      <Carousel
        :value="prochainesSorties"
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
    </section>
  </div>
</template>
