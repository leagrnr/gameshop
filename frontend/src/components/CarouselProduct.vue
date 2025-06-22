<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Carousel from 'primevue/carousel'
import GameCard from "@/components/GameCard.vue"
import api from '../services/api'

const nouveautes = ref([])
const prochainesSorties = ref([])

const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '480px',
    numVisible: 1,
    numScroll: 1
  }
]

onMounted(async () => {
  const res = await api.get('/games')
  const allGames = res.data
  nouveautes.value = allGames.filter(game => game.status === 'nouveaute')
  prochainesSorties.value = allGames.filter(game => game.status === 'prochaine_sortie')
})
</script>

<template>
  <div class="space-y-12 px-4">
    <section>
      <h2 class="text-3xl font-bold text-white my-[5vh]">Nouveautés</h2>
      <Carousel
        :value="nouveautes"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        class="mx-auto w-[95vw]"
        circular
      >
        <template #item="slotProps">
          <div class="flex justify-center items-center h-full">
            <GameCard :game="slotProps.data" :key="slotProps.data.id" />
          </div>
        </template>
      </Carousel>
    </section>

    <section>
      <h2 class="text-3xl font-bold text-white my-[5vh]">Prochaines sorties</h2>
      <Carousel
        :value="prochainesSorties"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        class="mx-auto w-[95vw]"
        circular
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

