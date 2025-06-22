<script setup>
import { ref, watch, computed } from 'vue'
import InputText from 'primevue/inputtext'
import api from '../services/api'
import { useRouter } from 'vue-router'

const search = ref('')
const results = ref([])
const router = useRouter()
const isMenuOpen = ref(false)

const isLoggedIn = computed(() => !!localStorage.getItem('token'))

watch(search, async (val) => {
  if (val) {
    try {
      const res = await api.get('/games', { params: { search: val } })
      results.value = res.data
    } catch (err) {
      console.error('Erreur lors de la recherche :', err)
    }
  } else {
    results.value = []
  }
})

function goToDetail(gameId) {
  const path = `/games/${gameId}`

  if (router.currentRoute.value.path === path) {
    router.replace('/').then(() => {
      router.push(path)
    })
  } else {
    router.push(path)
  }
  search.value = ''
  results.value = []
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 left-0 w-full bg-gray-500/80 backdrop-blur-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <div class="flex items-center">
          <h1 class="text-purple-500 text-xl font-bold">GS</h1>
        </div>

        <div class="hidden md:flex space-x-6 items-center">
          <router-link to="/" class="hover:text-purple-500">Accueil</router-link>
          <router-link to="#" class="hover:text-purple-500">Jeux</router-link>
          <router-link to="#" class="hover:text-purple-500">Magasins</router-link>

          <div class="relative bg-gray-500 rounded-md px-2 py-1 text-white flex items-center">
            <i class="pi pi-search mr-2" />
            <InputText v-model="search" placeholder="Recherche..." />
            <ul
              v-if="results.length"
              class="absolute left-0 top-full mt-1 w-full bg-white text-black rounded shadow-lg z-50"
            >
              <li
                v-for="game in results"
                :key="game.id"
                class="px-4 py-2 hover:bg-purple-100 cursor-pointer"
                @click="goToDetail(game.id)"
              >
                {{ game.name }}
              </li>
            </ul>
          </div>

          <router-link :to="isLoggedIn ? '/profile' : '/login'" class="hover:text-purple-500">
            <i class="pi pi-user" />
          </router-link>
          <router-link to="/cart" class="hover:text-purple-500">
            <i class="pi pi-shopping-cart" />
          </router-link>
          <div class="flex items-center space-x-1 hover:text-purple-500 cursor-pointer">
            <i class="pi pi-globe" />
            <p>FR</p>
          </div>
        </div>

        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="text-white focus:outline-none">
            <i class="pi" :class="isMenuOpen ? 'pi-times' : 'pi-bars'" />
          </button>
        </div>
      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden px-4 pb-4 space-y-2">
      <router-link @click="isMenuOpen = false" to="/" class="block text-white hover:text-purple-500">Accueil</router-link>
      <router-link @click="isMenuOpen = false" to="#" class="block text-white hover:text-purple-500">Jeux</router-link>
      <router-link @click="isMenuOpen = false" to="#" class="block text-white hover:text-purple-500">Magasins</router-link>

      <div class="relative bg-gray-500 rounded-md px-2 py-1  flex items-center mt-2">
        <i class="pi pi-search mr-2 text-white " />
        <InputText v-model="search" placeholder="Recherche..." />
        <ul
          v-if="results.length"
          class="absolute left-0 top-full mt-1 w-full bg-white text-black  rounded shadow-lg z-50"
        >
          <li
            v-for="game in results"
            :key="game.id"
            class="px-4 py-2 hover:bg-purple-100 cursor-pointer"
            @click="goToDetail(game.id)"
          >
            {{ game.name }}
          </li>
        </ul>
      </div>

      <router-link :to="isLoggedIn ? '/profile' : '/login'" class="block text-white hover:text-purple-500 mt-2">
        <i class="pi pi-user mr-1" /> Profil
      </router-link>
      <router-link to="/cart" class="block text-white hover:text-purple-500">
        <i class="pi pi-shopping-cart mr-1" /> Panier
      </router-link>
      <div class="flex items-center space-x-1 text-white hover:text-purple-500 cursor-pointer">
        <i class="pi pi-globe" />
        <p>FR</p>
      </div>
    </div>
  </nav>
</template>
