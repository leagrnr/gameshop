<script setup>
import { ref, onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import api from "@/services/api"
import Footer from "@/components/Footer.vue";

const games = ref([])

onMounted(async () => {
  const res = await api.get('/games')
  games.value = res.data
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
