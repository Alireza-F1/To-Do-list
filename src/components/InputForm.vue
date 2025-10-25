<script setup>
import { ref } from 'vue';
import { useTaskStore } from '@/stores/counter';
  const tasks = useTaskStore()
  const inputTask = ref('')
  const submitHandler = () => {
  if (inputTask.value.length >= 2){
    const newItem = {
      "id": String(Math.floor(Math.random()*10_000_000)),
      "name": inputTask.value,
      "isFav": false,
      "done": false
    }
    tasks.addItem(newItem)
    inputTask.value = ''
  }
}
</script>

<template>
    <form @submit.prevent="submitHandler" class="flex gap-1 mb-3">
      <input v-model="inputTask" class="bg-amber-50 p-2 rounded-lg" type="text" placeholder="Add a Task" />
      <input type="submit" class="p-2 rounded-lg bg-amber-500 hover:bg-green-400 hover-transition"></input>
    </form>
</template>