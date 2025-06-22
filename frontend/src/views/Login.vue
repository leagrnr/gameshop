<script setup>
import { ref } from 'vue'
import api from '@/services/api'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const login = async () => {
  try {
    const res = await api.post('/users/login', { email: email.value, password: password.value })
    localStorage.setItem('user', JSON.stringify(res.data))
    router.push('/')
  } catch (e) {
    error.value = e.response?.data?.message || 'Erreur de connexion'
  }
}
</script>

<template>
  <form @submit.prevent="login" class="mt-[20vh] w-96 mx-auto p-6  shadow-md rounded">
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Mot de passe" required />
    <button type="submit">Se connecter</button>
    <div v-if="error" style="color:red">{{ error }}</div>
  </form>
</template>
