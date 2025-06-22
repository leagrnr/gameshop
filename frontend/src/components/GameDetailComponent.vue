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
  props.game.store_review_like.replace(/\n/g, '<br>')
)

const reviewDislikeHtml = computed(() =>
  props.game.store_review_dislike.replace(/\n/g, '<br>')
)

const reviewGlobalHtml = computed(() =>
  props.game.store_review_global.replace(/\n/g, '<br>')
)
</script>

<template>
  <div class="flex items-start gap-8 mt-[10vh] w-full px-12">
    <div class="w-1/2 flex justify-center">
      <img
        :src="`${imageBaseUrl}${game.image}`"
        :alt="game.name"
        class="h-[40vh] w-[30vw] rounded object-cover"
      />
    </div>

    <div class="w-1/2 h-[40vh] flex items-center justify-center">
      <div class="w-full max-w-xl mx-auto flex flex-col justify-between h-full">
        <h1 class="text-3xl font-bold text-center uppercase">
          {{ game.name }}
        </h1>

        <p class="text-justify">
          {{ game.description }}
        </p>

        <div class="flex justify-center">
          <button
            v-for="platform in platforms"
            :key="platform"
            @click="selectedPlatform = platform.trim()"
            :class="[
              'font-bold py-2 px-6 rounded-full mx-2 transition-colors duration-200',
                platform.trim() === selectedPlatform
                ? 'bg-white text-black'
                : 'bg-transparent text-white border border-white'
            ]"
          >
            {{ platform.trim() }}
          </button>
        </div>

        <div class="flex items-center justify-around">
          <p class="text-2xl font-bold">{{ game.price }}€</p>
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

  <div class="mt-12 px-8 max-w-4xl mx-auto text-white">
    <h2 class="text-center text-2xl font-bold mb-8">NOTRE AVIS</h2>
    <h3 class="font-bold text-xl">🌟 Ce qu'on aime</h3>
    <p v-html="reviewLikeHtml"></p>
    <h3 class="font-bold text-xl mt-4">⚠️ Ce qui peut déplaire</h3>
    <p v-html="reviewDislikeHtml"></p>
    <h3 class="font-bold text-xl mt-4">🧾 Note globale : {{ game.store_rating }}/10</h3>
    <p v-html="reviewGlobalHtml"></p>


  </div>
</template>

