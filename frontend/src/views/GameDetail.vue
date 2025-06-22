<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/services/api'
import GameDetailComponent from '@/components/GameDetailComponent.vue'

const route = useRoute()
const game = ref(null)
const imageBaseUrl = import.meta.env.VITE_BASE_URL.replace('/api', '') + '/images/'

const fetchGame = async (id: string | string[]) => {
  try {
    const res = await api.get(`/games/${id}`)
    game.value = res.data
  } catch (err) {
    console.error('Erreur lors du chargement du jeu :', err)
  }
}

onMounted(() => {
  fetchGame(route.params.id)
})

watch(() => route.params.id, (newId) => {
  fetchGame(newId)
})
</script>

<template>
  <GameDetailComponent v-if="game" :game="game" :imageBaseUrl="imageBaseUrl" />
  <div v-else class="text-white">Chargement...</div>
</template>
