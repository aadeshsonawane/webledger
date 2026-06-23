<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const base_url = "http://localhost:3333/posts"
const posts = ref([])

const form = ref({
  title: '',
  content: '',
  author: '',
})

const editingId = ref(null)

const getPosts = async () => {
  try {
    const res = await axios.get(base_url)
    posts.value = res.data
  } catch (error) {
    console.error(error)
  }
}

const savePost = async () => {
  try {

    console.log(editingId.value)

    if (editingId.value) {
      await axios.put(
        `${base_url}${editingId.value}`,
        form.value
      )
  
    } else {
      await axios.post(base_url, form.value)
    }
    form.value = {
      title: '',
      content: '',
      author: '',
    }
    editingId.value = null
    await getPosts()
  } catch (error) {
    console.error(error)
  }
}

const editPost =  async (post) => {
  editingId.value = post.id
  console.log(editingId.value)

  form.value = {
    title: post.title,
    content: post.content,
    author: post.author,
  }
    await getPosts()
}

const deletePost = async (id) => {
  try {
    await axios.delete(`${base_url}/${id}`)
    await getPosts()
    console.log(id)
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getPosts()
})
</script>

<template>
  <div style="margin: 10px auto; border: 2px solid black; width: 50%; text-align: center;">
    <h1>Posts CRUD</h1>

    <input v-model="form.title" placeholder="Title"/> <br>
    <input v-model="form.content" placeholder="Content"/> <br>
    <input v-model="form.author" placeholder="Author"/> <br>
    <button @click="savePost">
      Create
    </button>

    <table style="margin-left: 10%;">
      <thead>
        <tr>
          <th style="margin: 1rem;">ID</th>
          <th>Title</th>
          <th>Content</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="post in posts"
          :key="post.id"
        > 
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.content }}</td>
          <td>{{ post.author }}</td>

          <td>
            <button @click="editPost(post)">
              Edit
            </button>

            <button @click="deletePost(post.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
input{
  margin-bottom: 1rem;
}
button{
  margin-right: 1rem;
}
th{
  margin-right: 1rem;
}
</style>