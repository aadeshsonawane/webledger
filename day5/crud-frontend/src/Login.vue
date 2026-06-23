<script setup>
import { ref } from 'vue'
import axios from 'axios'

const emit = defineEmits(['loginSuccess'])

const form = ref({
  email: '',
  password: ''
})

const login = async () => {
  const res = await axios.post(
    'http://localhost:3333/login',
    form.value
  )

  localStorage.setItem('token', res.data.token)
  emit('loginSuccess')
}
</script>

<template>
  <h2>Login</h2>

  <input v-model="form.email" placeholder="Email" />
  <input v-model="form.password" type="password" placeholder="Password" />

  <button @click="login">Login</button>
</template>