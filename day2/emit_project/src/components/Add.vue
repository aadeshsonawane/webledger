<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add'])

const num1 = ref()
const num2 = ref()



const addNmber = ()=>{
    emit("add",Number(num1.value), Number(num2.value) )
}


</script>

<template>

    <input type="text" v-model="num1" placeholder="number">
    <input type="text" v-model="num2" placeholder="number">
    


    <button @click="addNmber">add</button>


</template>