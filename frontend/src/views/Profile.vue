<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const selectedSection = ref('')
const showSection = (section) => selectedSection.value = section

const token = localStorage.getItem('token')
const baseUrl = import.meta.env.VITE_BASE_URL

const user = JSON.parse(localStorage.getItem('user'))
const userId = user?.id

const imagePath = ref('')
const selectedFile = ref(null)

const username = ref('')
const email = ref('')

// 🖼️ Affiche l'image
const getImageUrl = (path) => {
  const apiUrl = import.meta.env.VITE_BASE_URL
  return `${apiUrl.replace('/api', '')}${path}`
}

// 📥 Charge user
const loadUser = async () => {
  try {
    const res = await fetch(`${baseUrl}/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    const data = await res.json()
    imagePath.value = data.profileImage
    username.value = data.username
    email.value = data.email
  } catch (error) {
    console.error('Erreur chargement user :', error)
  }
}

// 📤 Upload image
const handleFile = (e) => {
  selectedFile.value = e.target.files[0]
}

const upload = async () => {
  if (!selectedFile.value) return alert('Aucun fichier sélectionné')

  const formData = new FormData()
  formData.append('profileImage', selectedFile.value)

  try {
    const res = await fetch(`${baseUrl}/users/${userId}/upload`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
      body: formData
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message || 'Erreur upload image')
    imagePath.value = data.image
    alert('Image mise à jour ✅')
  } catch (err) {
    console.error(err)
    alert('Erreur lors de l’upload')
  }
}

// 🔄 Mise à jour profil
const updateProfile = async () => {
  try {
    const res = await fetch(`${baseUrl}/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value
      })
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message || 'Erreur mise à jour')

    alert('Profil mis à jour ✅')
    localStorage.setItem('user', JSON.stringify(data))
  } catch (err) {
    console.error('Erreur updateProfile :', err)
    alert('Erreur lors de la mise à jour')
  }
}

// 🚪 Déconnexion
const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  router.push('/login')
}

// ❌ Suppression
const deleteAccount = async () => {
  const confirmation = confirm('Es-tu sûr de vouloir supprimer ton compte ? Cette action est irréversible.')
  if (!confirmation) return

  try {
    const res = await fetch(`${baseUrl}/users/${userId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })

    if (!res.ok) throw new Error('Erreur suppression compte')

    alert('Compte supprimé ❌')
    logout()
  } catch (err) {
    console.error('Erreur suppression :', err)
    alert('Erreur lors de la suppression')
  }
}

onMounted(() => {
  loadUser()
})
</script>

<template>
  <div class="flex justify-center mt-[10vh] text-white">
    <div class="flex flex-row items-start space-x-12 max-w-5xl w-full">

      <!-- 📷 Image -->
      <div class="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
        <img
          v-if="imagePath"
          :src="getImageUrl(imagePath)"
          alt="Photo de profil"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- 📄 Profil -->
      <div class="flex flex-col items-center flex-grow space-y-6">

        <!-- Nom -->
        <h2 class="text-2xl font-semibold">{{ username }}</h2>

        <!-- Boutons principaux -->
        <button
          class="px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition border-2 border-white"
          @click="showSection('modifier')"
        >
          Modifier mes informations
        </button>

        <div class="flex flex-wrap justify-center gap-4">
          <button
            class="px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition border-2 border-white"
            @click="showSection('achats')"
          >
            Mes derniers achats
          </button>
          <button
            class="px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition border-2 border-white"
            @click="showSection('precommandes')"
          >
            Mes précommandes
          </button>
          <button
            class="px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition border-2 border-white"
            @click="showSection('avis')"
          >
            Mes avis
          </button>
        </div>

        <!-- Zone dynamique -->
        <div class="mt-8 text-white w-full text-center">
          <p v-if="selectedSection === 'achats'">Aucun achat</p>
          <p v-else-if="selectedSection === 'avis'">Aucun avis</p>
          <p v-else-if="selectedSection === 'precommandes'">Aucune précommande</p>

          <div v-else-if="selectedSection === 'modifier'" class="space-y-4 mt-4 max-w-sm mx-auto text-left">
            <p class="text-lg font-semibold">Modifier mes informations</p>

            <input
              type="text"
              v-model="username"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Nom"
            />
            <input
              type="email"
              v-model="email"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Email"
            />

            <input
              type="file"
              @change="handleFile"
              class="block text-sm text-white file:bg-purple-600 file:text-white file:px-4 file:py-1 file:rounded-full mt-4"
            />
            <button
              @click="upload"
              class="mt-2 bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700 w-full"
            >
              Uploader une nouvelle image
            </button>

            <button
              @click="updateProfile"
              class="mt-4 bg-green-600 px-4 py-2 rounded text-white hover:bg-green-700 w-full"
            >
              Enregistrer les modifications
            </button>

            <button
              @click="logout"
              class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full"
            >
              Déconnexion
            </button>

            <button
              @click="deleteAccount"
              class="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded w-full border border-red-500"
            >
              Supprimer mon compte
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
input::file-selector-button {
  background-color: #9333ea;
  color: white;
  border: none;
  padding: 0.4rem 1rem;
  border-radius: 9999px;
}
</style>
