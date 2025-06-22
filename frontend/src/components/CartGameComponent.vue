<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'
import { calculateCartTotal } from '@/utils/cart'

const cart = useCartStore()
const imageBaseUrl = import.meta.env.VITE_BASE_URL.replace('/api', '') + '/images/'

const cartTotal = computed(() =>
  calculateCartTotal(cart.items)
)
</script>

<template>
  <div class="px-4 sm:px-8 pt-20">
    <h1 class="text-center text-3xl sm:text-4xl font-bold mb-12">Mon panier</h1>

    <div v-if="cart.items.length" class="max-w-5xl mx-auto space-y-8">
      <div
        v-for="(item, idx) in cart.items"
        :key="idx"
        class="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center border-purple-600 border p-4 sm:p-6 rounded-xl shadow text-white"
      >
        <img
          :src="item.image ? (imageBaseUrl + item.image) : ''"
          :alt="item.name"
          class="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-xl mx-auto"
        />
        <div class="flex flex-col items-center sm:items-center text-center">
          <h2 class="text-lg sm:text-xl font-semibold">{{ item.name }}</h2>
          <span
            v-if="item.selectedPlatform"
            class="inline-block text-sm border border-white px-4 py-1 rounded-full mt-2"
          >
            {{ item.selectedPlatform }}
          </span>
        </div>
        <div class="text-center text-white">
          <p class="text-xl sm:text-2xl font-bold">{{ item.price }}€</p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-between mt-10 gap-4 px-4">
        <p class="text-xl sm:text-2xl font-semibold text-center sm:text-left">
          Total : <span class="text-purple-400">{{ cartTotal }}€</span>
        </p>
        <button
          class="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold py-3 px-8 rounded-full transition-colors duration-200"
        >
          Valider le panier
        </button>
      </div>
    </div>

    <div v-else class="text-center text-lg sm:text-xl text-gray-300">
      Votre panier est vide.
    </div>
  </div>
</template>

