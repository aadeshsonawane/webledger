<script setup>
import { ref } from 'vue'
import axios from 'axios'
const emit = defineEmits(['goToLogin'])

const form = ref({
  fullName: '',
  email: '',
  password: ''
})

const register = async () => {
  await axios.post(
    'http://localhost:3333/register',
    form.value
  )

  alert('Register successful')
  form.value = { fullName: '', email: '', password: '' }
   emit('goToLogin')
}
</script>

<template>
  <h2>Register</h2>

  <input v-model="form.fullName" placeholder="Full Name" />
  <input v-model="form.email" placeholder="Email" />
  <input v-model="form.password" type="password" placeholder="Password" />

  <button @click="register">Register</button>
</template>