<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({ fullName: '', email: '', password: '' })

const register = async () => {
  try {
    await axios.post('http://localhost:3333/register', form.value)
    alert('Register successful, please login')
    router.push('/login')
  } catch (error) {
    console.log("*********************8",error)
    alert("User already register! please login")
  }
}
</script>

<template>
  <h2>Register</h2>
  <input v-model="form.fullName" placeholder="Full Name" />
  <input v-model="form.email" placeholder="Email" />
  <input v-model="form.password" type="password" placeholder="Password" />
  <button @click="register">Register</button>
  <p>
    <router-link to="/login">Login</router-link>
  </p>
</template>