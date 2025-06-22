<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const router = useRouter()
const cart = useCartStore()

const props = defineProps({
  game: { type: Object, required: true },
  platform: { type: String, required: false },
  disabled: { type: Boolean, default: false }
})

const goToCart = () => {
  if (Array.isArray(props.game.platform) || (typeof props.game.platform === 'string' && props.game.platform.includes(','))) {
    if (!props.platform) return
  }
  cart.addToCart(props.game, props.platform)
  router.push('/cart')
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
    @click="goToCart"
    :disabled="props.disabled"
  >
    <slot>
      {{ props.game.status === 'nouveaute' ? 'Acheter' : 'Précommander' }}
    </slot>
  </button>
</template>
