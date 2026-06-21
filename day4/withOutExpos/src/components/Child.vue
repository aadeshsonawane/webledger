<script setup>
import { emitter } from './eventBus'
import { ref } from 'vue'

const str = ref("")

const sayHello = () => {

  str.value = "hello from chiild"

  // console.log('Hello from Child')
}

emitter.on('runHello', () => {
  sayHello()
})


// onMounted(() => {
//   emitter.on('runHello', handleRunHello)
// })

// onUnmounted(() => {
//   emitter.off('runHello', handleRunHello)
// })
</script>

<template>
  <h1>Hello from Child</h1>
  <p>{{ str }}</p>
</template>

<style scoped>
</style>