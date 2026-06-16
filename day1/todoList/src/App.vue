<script setup>
import { ref } from 'vue'

const title = ref('')
const date = ref('')

const tasks = ref([])

function addTask() {
  tasks.value.push({
    Title: title.value,
    Date: date.value
  })

  title.value = ""
  date.value = ""
}

function deleteTask(id) {
  tasks.value = tasks.value.filter(task => task.id !== id)
}



</script>

<template>
  <h1 class="text-center">I AM YOU CRUD FRINED</h1>

  <div class="text-center mt-5">
    <form @submit.prevent="addTask">
      <input type="text" placeholder="Enter Task " v-model="title">
      <input type="date" name="" id="" v-model="date">
      <button type="submit">Add</button>
    </form>

  </div>

  <div>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span>{{ task.title }}</span>
        <span> - {{ task.date }}</span>

        <button @click="deleteTask(task.id)">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
