<script setup>
import Add from "./components/Add.vue"
import { ref } from "vue"

const result = ref()

const addNumbers =(a ,b)=>{
  result.value = a + b
  // console.log(result)

}
</script>

<template>
  <h1>ADD!</h1>
  <p>
    <Add @add="addNumbers"/>
  </p>
  <p>This is result: {{result}}</p>
</template>

<style scoped></style>
