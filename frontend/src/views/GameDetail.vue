<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/services/api'
import GameDetailComponent from '@/components/GameDetailComponent.vue'

const route = useRoute()
const game = ref(null)
const imageBaseUrl = import.meta.env.VITE_BASE_URL.replace('/api', '') + '/images/'

onMounted(async () => {
  const res = await api.get(`/games/${route.params.id}`)
  game.value = res.data
})
</script>

<template>
  <GameDetailComponent v-if="game" :game="game" :imageBaseUrl="imageBaseUrl" />
  <div v-else class="text-white">Chargement...</div>
</template>
