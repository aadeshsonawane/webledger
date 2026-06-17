<script setup>
import Add from "./components/Add.vue"


const addNumbers =(a ,b)=>{
  console.log(a+b)

}
</script>

<template>
  <h1>You did it!</h1>
  <p>
    <Add @add="addNumbers"/>
  </p>
</template>

<style scoped></style>
