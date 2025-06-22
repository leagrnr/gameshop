<template>
  <div>
    <h1>Bienvenue sur ton profil</h1>
    <p>Token : {{ token }}</p>

    <input type="file" @change="handleFile" />
    <button @click="upload">Uploader</button>

    <div v-if="imagePath">
      <h3>Image actuelle :</h3>
      <img :src="`http://localhost:8080${imagePath}`" alt="Profil" style="max-width: 200px;" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedFile = ref(null)
const imagePath = ref('')
const token = localStorage.getItem('token')

// ⚠️ à remplacer par l’ID de l’utilisateur connecté
const userId = 1

const handleFile = (e) => {
  selectedFile.value = e.target.files[0]
}

const upload = async () => {
  if (!selectedFile.value) return alert('Aucun fichier sélectionné')

  const formData = new FormData()
  formData.append('profileImage', selectedFile.value)

  try {
    const res = await fetch(`http://localhost:8080/api/users/${userId}/upload`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    })

    const data = await res.json()
    if (!res.ok) throw new Error(data.message || 'Erreur lors de l’upload')

    imagePath.value = data.image
  } catch (error) {
    console.error(error)
    alert('Erreur lors de l’upload')
  }
}
</script>

<style scoped>
img {
  border-radius: 8px;
  margin-top: 10px;
}
</style>
