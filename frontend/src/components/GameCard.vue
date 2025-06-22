<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  game: {
    type: Object,
    required: true
  }
})

const imageBaseUrl = import.meta.env.VITE_BASE_URL.replace('/api', '') + '/images/'
const router = useRouter()

const goToDetail = () => {
  router.push(`/games/${props.game.id}`)
}
</script>

<template>
  <div
    class="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-gray-900 text-white flex"
  >
    <img
      class="absolute inset-0 w-full h-full object-cover"
      :src="`${imageBaseUrl}${game.image}`"
      :alt="game.name"
    />
    <div
      class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-600/70 to-transparent pointer-events-none z-10"
    ></div>
    <div class="absolute inset-0 p-4 flex flex-col justify-end z-20">
      <h2 class="text-base sm:text-lg md:text-xl font-bold text-center">
        {{ game.name }}
      </h2>
      <p class="text-sm sm:text-md font-semibold mt-1 text-center">
        {{ game.price }}€
      </p>
      <button
        @click="goToDetail"
        class="mt-3 font-bold py-2 px-4 rounded-full transition-colors duration-200 bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base"
      >
        Voir le détail
      </button>
    </div>
  </div>
</template>
