<script setup>

const props = defineProps({
    name : String,
    marks: Array
})

</script>

<template>
  <h1>hello my name is {{props.name}}aa</h1>

  <h1>marks</h1>
  <div> 
    <ul>
      <li v-for="mark in marks">
        {{ mark }}
      </li>
    </ul>
  </div>
</template>

<style scoped>


</style>
