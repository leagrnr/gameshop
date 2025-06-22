<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

const baseUrl = import.meta.env.VITE_BASE_URL

const handleLogin = async () => {
  errorMessage.value = ''
  try {
    const response = await fetch(`${baseUrl}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value })
    })

    const data = await response.json()

    if (!response.ok) {
      errorMessage.value = data.message || 'Erreur de connexion'
      return
    }

    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
    router.push('/profile')
  } catch (error) {
    errorMessage.value = 'Erreur réseau'
    console.error(error)
  }
}
</script>

<template>
  <div class="min-h-[80vh] flex items-center justify-center ">
    <div class=" rounded-2xl shadow-lg p-8 w-full max-w-md border-2 border-purple-500">
      <h2 class="text-2xl font-bold text-center  mb-6">Connexion</h2>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Mot de passe"
          required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          class="w-full bg-purple-500 py-2 rounded-md hover:bg-purple-600 transition"
        >
          Se connecter
        </button>
        <p v-if="errorMessage" class="text-red-500 text-sm text-center">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>
