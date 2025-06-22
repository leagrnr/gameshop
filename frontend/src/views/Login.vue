<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

const handleLogin = async () => {
  errorMessage.value = ''
  try {
    const response = await fetch('http://localhost:8080/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value })
    })

    const data = await response.json()

    if (!response.ok) {
      errorMessage.value = data.message || 'Erreur de connexion'
      return
    }

    // ✅ Stocker le token
    localStorage.setItem('token', data.token)

    // ✅ Rediriger vers une page protégée
    router.push('/profile') // Remplace par ton chemin réel
  } catch (error) {
    errorMessage.value = 'Erreur réseau'
    console.error(error)
  }
}
</script>

<template>
  <div class="login-container">
    <h2>Connexion</h2>
    <form @submit.prevent="handleLogin">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Mot de passe" required />
      <button type="submit">Se connecter</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
.login-container {
  margin-top: 10vh;
  max-width: 400px;
}
.error {
  color: red;
}
button {
  margin-top: 30vh;
}
</style>
