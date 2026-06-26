<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const base_url = 'http://localhost:3333/posts'
const user = ref(null)
const posts = ref([])
const form = ref({ title: '', content: '' })
const editingId = ref(null)

const token = () => localStorage.getItem('token')

const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  router.push('/login')
}

const getPosts = async () => {
  const res = await axios.get(base_url, {
    headers: { Authorization: `Bearer ${token()}` },
  })
  posts.value = res.data
}

const savePost = async () => {
  if (editingId.value) {
    await axios.put(`${base_url}/${editingId.value}`, form.value, {
      headers: { Authorization: `Bearer ${token()}` },
    })
  } else {
    await axios.post(base_url, form.value, {
      headers: { Authorization: `Bearer ${token()}` },
    })
  }
  form.value = { title: '', content: '' }
  editingId.value = null
  await getPosts()
}

const editPost = (post) => {
  editingId.value = post.id
  form.value = { ...post }
}

const deletePost = async (id) => {
  await axios.delete(`${base_url}/${id}`, {
    headers: { Authorization: `Bearer ${token()}` },
  })
  await getPosts()
}

onMounted(() => {
  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    user.value = JSON.parse(storedUser)
  }
  getPosts()
})
</script>

<template>
  <h1>Posts CRUD</h1>
  <p v-if="user">Hello {{ user.fullName }}</p>
  <button @click="logout">Logout</button>

  <h3>Create / Update Post</h3>
  <input v-model="form.title" placeholder="Title" />
  <input v-model="form.content" placeholder="Content" />
  <button @click="savePost">{{ editingId ? 'Update' : 'Create' }}</button>

  <table>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Content</th>
      <th>Actions</th>
    </tr>
    <tr v-for="post in posts" :key="post.id">
      <td>{{ post.id }}</td>
      <td>{{ post.title }}</td>
      <td>{{ post.content }}</td>
      <td><button @click="editPost(post)">Edit</button></td>
      <td><button @click="deletePost(post.id)">Delete</button></td>
    </tr>
  </table>
</template>