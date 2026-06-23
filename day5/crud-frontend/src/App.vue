<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Login from './Login.vue'
import Register from './Register.vue'

const base_url = "http://localhost:3333/posts"

const isLoggedIn = ref(!!localStorage.getItem('token'))
const showRegister = ref(false)

const posts = ref([])

const form = ref({
  title: '',
  content: '',
  author: '',
})

const editingId = ref(null)

const token = () => localStorage.getItem('token')

// ---------------- AUTH ----------------
const handleLoginSuccess = () => {
  isLoggedIn.value = true
}

const logout = () => {
  localStorage.removeItem('token')
  isLoggedIn.value = false
}

// ---------------- POSTS ----------------
const getPosts = async () => {
  const res = await axios.get(base_url, {
    headers: { Authorization: `Bearer ${token()}` }
  })
  posts.value = res.data
}

const savePost = async () => {
  if (editingId.value) {
    await axios.put(
      `${base_url}/${editingId.value}`,
      form.value,
      { headers: { Authorization: `Bearer ${token()}` } }
    )
  } else {
    await axios.post(
      base_url,
      form.value,
      { headers: { Authorization: `Bearer ${token()}` } }
    )
  }

  form.value = { title: '', content: '', author: '' }
  editingId.value = null
  await getPosts()
}

const editPost = (post) => {
  editingId.value = post.id
  form.value = { ...post }
}

const deletePost = async (id) => {
  await axios.delete(`${base_url}/${id}`, {
    headers: { Authorization: `Bearer ${token()}` }
  })
  await getPosts()
}

// ---------------- INIT ----------------
onMounted(() => {
  if (isLoggedIn.value) {
    getPosts()
  }
})
</script>

<template>
  <!-- LOGIN / REGISTER -->
  <div v-if="!isLoggedIn">
    
    <Login 
      v-if="!showRegister"
      @loginSuccess="handleLoginSuccess"
    />

    <Register v-else />

    <button @click="showRegister = !showRegister">
      {{ showRegister ? 'Go to Login' : 'Go to Register' }}
    </button>

  </div>

  <!-- CRUD -->
  <div v-else>
    <h1>Posts CRUD</h1>

    <button @click="logout">Logout</button>

    <h3>Create / Update Post</h3>

    <input v-model="form.title" placeholder="Title" />
    <input v-model="form.content" placeholder="Content" />
    <input v-model="form.author" placeholder="Author" />

    <button @click="savePost">
      {{ editingId ? 'Update' : 'Create' }}
    </button>

    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Content</th>
        <th>Author</th>
        <th>Actions</th>
      </tr>

      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.content }}</td>
        <td>{{ post.author }}</td>

        <td>
          <button @click="editPost(post)">Edit</button>
          <button @click="deletePost(post.id)">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>