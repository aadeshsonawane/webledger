<script setup>
import Child from './components/Child.vue'
import { emitter } from './components/eventBus.js'

const callMe = () => {
  emitter.emit('runHello')
}
</script>

<template>
  <h1>I am Parent</h1>

  <Child />

  <button @click="callMe">
    Say Hello
  </button>
</template>

<style scoped>
</style>