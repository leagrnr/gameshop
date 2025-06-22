<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  game: {
    type: Object,
    required: true
  },
  platform: {
    type: String,
    required: false
  }
})

const goToDetail = () => {
  router.push(`/games/${props.game.id}`) // ⚠️ corrigé ici (manquait des backticks)
}
</script>

<template>
  <button
    :class="[
      'mt-4 font-bold py-2 px-4 rounded-full transition-colors duration-200',
      props.platform
        ? 'bg-transparent text-white border border-white mx-2'
        : 'bg-purple-600 hover:bg-purple-700 text-white'
    ]"
    @click="goToDetail"
  >
    <slot>
      {{ props.game.status === 'nouveaute' ? 'Acheter' : 'Précommander' }}
    </slot>
  </button>
</template>
