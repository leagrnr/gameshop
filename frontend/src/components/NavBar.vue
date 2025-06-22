<script setup>
import { ref, watch, computed } from 'vue'
import InputText from 'primevue/inputtext'
import api from '../services/api'

const search = ref('')
const results = ref([])

watch(search, async (val) => {
  if (val) {
    const res = await api.get('/games', { params: { search: val } })
    results.value = res.data
  } else {
    results.value = []
  }
})

const isLoggedIn = computed(() => !!localStorage.getItem('user'))
</script>

<template>
  <nav class="flex justify-between items-center h-[5vh] w-full px-12 bg-gray-500/80 backdrop-blur-md fixed top-0 left-0 z-50">
    <div class="flex items-center">
      <h1 class="text-purple-500 text-xl">GS</h1>
    </div>

    <ul class="flex space-x-6 font-medium">
      <li>
        <router-link to="/" class="hover:text-purple-600">Accueil</router-link>
      </li>
      <li><a href="#" class="hover:text-purple-600">Jeux</a></li>
      <li><a href="#" class="hover:text-purple-600">Magasins</a></li>
    </ul>

    <div class="flex items-center space-x-2 !bg-gray-300 !rounded-md !px-2 !h-[70%] !text-black relative">
      <i class="pi pi-search" />
      <InputText
        v-model="search"
        placeholder="Recherche..."
      />
      <ul
        v-if="results.length"
        class="absolute left-0 top-full mt-1 w-full bg-white text-black rounded shadow-lg z-50"
      >
        <li
          v-for="game in results"
          :key="game.id"
          class="px-4 py-2 hover:bg-purple-100 cursor-pointer"
        >
          {{ game.name }}
        </li>
      </ul>
    </div>

    <div class="flex items-center space-x-4">
      <router-link
        :to="isLoggedIn ? '/profile' : '/login'"
        aria-label="Profile"
        class="hover:text-purple-600"
      >
        <i class="pi pi-user" />
      </router-link>
      <a href="/cart" aria-label="shopping" class="hover:text-purple-600">
        <i class="pi pi-shopping-cart" />
      </a>
        <a href="#" aria-label="language" class="hover:text-purple-600 flex items-center space-x-1">
          <i class="pi pi-globe" />
          <p>FR</p>
        </a>
    </div>
  </nav>

</template>

