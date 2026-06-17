<script setup>
import { ref } from 'vue';


const name = ref("")
const showMe = ref("")

const showName = ()=>{
  showMe.value = name.value
}

</script>

<template>
  <h1>You did it!</h1>
  <input type="text" placeholder="name" v-model="name">
   <button @click="showName">add me</button>
   
  <p>{{ showMe }}</p>
</template>

<style scoped></style>
