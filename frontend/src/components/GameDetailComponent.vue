<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import Button from './Button.vue'

const props = defineProps({
  game: { type: Object, required: true },
  imageBaseUrl: { type: String, required: true }
})

const platforms = computed(() => {
  return Array.isArray(props.game.platform)
    ? props.game.platform
    : props.game.platform.split(',')
})

const selectedPlatform = ref('')

onMounted(() => {
  if (platforms.value.length > 0) {
    selectedPlatform.value = platforms.value[0].trim()
  }
})

const reviewLikeHtml = computed(() =>
  (props.game.store_review_like || '').replace(/\n/g, '<br>')
)

const reviewDislikeHtml = computed(() =>
  (props.game.store_review_dislike || '').replace(/\n/g, '<br>')
)

const reviewGlobalHtml = computed(() =>
  (props.game.store_review_global || '').replace(/\n/g, '<br>')
)

const hasReviewContent = computed(() => {
  const { store_review_like, store_review_dislike, store_review_global } = props.game
  return [store_review_like, store_review_dislike, store_review_global].some(
    val => val && val.trim() !== ''
  )
})
</script>

<template>
  <div class="flex flex-col lg:flex-row items-start gap-8 mt-[10vh] w-full px-4 sm:px-8 lg:px-12">
    <div class="w-full lg:w-1/2 flex justify-center">
      <img
        :src="`${imageBaseUrl}${game.image}`"
        :alt="game.name"
        class="h-[30vh] sm:h-[35vh] md:h-[40vh] w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] rounded object-cover"
      />
    </div>

    <div class="w-full lg:w-1/2 flex items-center justify-center mt-6 lg:mt-0">
      <div class="w-full max-w-xl flex flex-col justify-between h-full text-white lg:space-y-20 space-y-10">
        <h1 class="text-2xl sm:text-3xl font-bold text-center uppercase">
          {{ game.name }}
        </h1>

        <p class="text-justify text-sm sm:text-base">
          {{ game.description }}
        </p>

        <div class="flex flex-wrap justify-center gap-2">
          <button
            v-for="platform in platforms"
            :key="platform"
            @click="selectedPlatform = platform.trim()"
            :class="[
              'font-bold py-2 px-6 rounded-full transition-colors duration-200',
              platform.trim() === selectedPlatform
                ? 'bg-white text-black'
                : 'bg-transparent text-white border border-white'
            ]"
          >
            {{ platform.trim() }}
          </button>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
          <p class="text-xl font-bold">{{ game.price }}€</p>
          <Button
            :game="game"
            :platform="selectedPlatform"
            class="min-w-[150px] text-center px-12"
            :disabled="!selectedPlatform"
          />
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="hasReviewContent"
    class="mt-12 px-4 sm:px-8 max-w-4xl mx-auto text-white"
  >
    <h2 class="text-center text-2xl font-bold mb-8">NOTRE AVIS</h2>

    <div v-if="props.game.store_review_like" class="mb-4">
      <h3 class="font-bold text-xl">🌟 Ce qu'on aime</h3>
      <p v-html="reviewLikeHtml" class="text-sm sm:text-base"></p>
    </div>

    <div v-if="props.game.store_review_dislike" class="mb-4">
      <h3 class="font-bold text-xl">⚠️ Ce qui peut déplaire</h3>
      <p v-html="reviewDislikeHtml" class="text-sm sm:text-base"></p>
    </div>

    <div v-if="props.game.store_review_global">
      <h3 class="font-bold text-xl">
        🧾 Note globale : {{ game.store_rating }}/10
      </h3>
      <p v-html="reviewGlobalHtml" class="text-sm sm:text-base"></p>
    </div>
  </div>
</template>

