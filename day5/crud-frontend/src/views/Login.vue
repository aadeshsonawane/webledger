<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({ email: '', password: '' })


const login = async () => {
  try {
    const res = await axios.post('http://localhost:3333/login', form.value)
    localStorage.setItem('token', res.data.token)

    console.log("6666666666666666666",res.data.token)
    localStorage.setItem('user', JSON.stringify(res.data.user))
    router.push('/posts')
  } catch (error) {
    console.log("*********************8",error)
    alert("Email or Password not found")

  }
}
</script>

<template>
  <h2>Login</h2>
  <input v-model="form.email" placeholder="Email" />
  <input v-model="form.password" type="password" placeholder="Password" />
  <button @click="login">Login</button>
  <p>

    <router-link to="/register">Register</router-link>
  </p>
</template>