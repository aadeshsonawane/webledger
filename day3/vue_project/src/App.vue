<script setup>

// import Header from './components/Header.vue';
// import Counter from './components/Counter.vue';

import { ref } from 'vue';
  const name = ref()
const password = ref()


const submittedName = ref('')
const submittedPassword = ref('')

const submit=()=> {
  submittedName.value = name.value
  submittedPassword.value = password.value

}

</script>

<template>

  <input type="text" placeholder="name" v-model="name">
  <br>
  <br>
  <input type="text" placeholder="password" v-model="password">
  <br>
  <br>
  <button @click="submit">submit</button>


  <p>{{ submittedName }}</p>
  <p>{{ submittedPassword }}</p>
 
</template>



<style scoped>


</style>
