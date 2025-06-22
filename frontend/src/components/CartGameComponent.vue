<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'

const cart = useCartStore()
const imageBaseUrl = import.meta.env.VITE_BASE_URL.replace('/api', '') + '/images/'

const cartTotal = computed(() =>
  cart.items.reduce((sum, item) => sum + Number(item.price), 0).toFixed(2)
)
</script>

<template>
  <div class=" px-8 pt-20">
    <h1 class="text-center text-4xl font-bold mb-12">Mon panier</h1>

    <div v-if="cart.items.length" class="max-w-5xl mx-auto space-y-12">
      <div
        v-for="(item, idx) in cart.items"
        :key="idx"
        class="grid grid-cols-3 items-center border-purple-600 border-1 p-6 rounded-xl shadow"
      >
        <img
          :src="item.image ? (imageBaseUrl + item.image) : ''"
          :alt="item.name"
          class="w-32 h-32 object-cover rounded-xl mx-auto"
        />
        <div class="flex flex-col items-center">
          <h2 class="text-xl font-semibold text-center">{{ item.name }}</h2>
          <div class="mt-2">
            <span
              v-if="item.selectedPlatform"
              class="inline-block text-sm border border-white px-4 py-1 rounded-full mt-2"
            >
              {{ item.selectedPlatform }}
            </span>
          </div>
        </div>
        <div class="text-center">
          <p class="text-2xl font-bold">{{ item.price }}€</p>
        </div>
      </div>
      <!-- Total + Bouton -->
      <div class="flex items-center justify-between mt-12 px-4">
        <p class="text-2xl font-semibold">
          Total : <span class="text-purple-400">{{ cartTotal }}€</span>
        </p>
        <button
          class="bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold py-3 px-8 rounded-full transition-colors duration-200"
        >
          Valider le panier
        </button>
      </div>
    </div>

    <div v-else class="text-center text-xl text-gray-300">
      Votre panier est vide.
    </div>
  </div>
</template>
