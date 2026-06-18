<script setup>
import { ref, onMounted } from 'vue'

const title = ref('')
const date = ref('')

const tasks = ref([])

onMounted(() => {
  const savedTasks = localStorage.getItem("tasks")

  if (savedTasks) {
    tasks.value = JSON.parse(savedTasks)
  }
})


// Add task function

function addTask() {
  const newTask = {
  id: Date.now(),
  title: title.value,
  date: date.value
}
tasks.value.push(newTask)

localStorage.setItem("tasks", JSON.stringify(tasks.value))

  title.value = ""
  date.value = ""
}

// Delete Task Function

function deleteTask(id) {
  tasks.value = tasks.value.filter(task => task.id !== id)
  localStorage.setItem("tasks", JSON.stringify(tasks.value))
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
