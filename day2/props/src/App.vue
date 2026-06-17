<script setup>
import { ref } from 'vue';
import Child from './components/Child.vue';



  // const name = "mrStranger"

  const name = ref()

  const marks = [12,32,35,65,68]


</script>


<template>
  <h1>Props</h1>
  <input type="text" v-model="name">bb
  <Child :name="name" :marks="marks"/>  

</template>

<style scoped></style>
