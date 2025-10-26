<script setup>
import { onMounted, ref } from 'vue'
import DoneTasks from './DoneTasks.vue'
import TasksMetaData from './TasksMetaData.vue'
import RemainTasks from './RemainTasks.vue'
import { useTaskStore } from '@/stores/counter'

const taskStore = useTaskStore()

const taskRepStatus = ref('all')

// Fetch
onMounted(() => {
  taskStore.fetchItems()
})
</script>

<template>
  <!-- In Vuejs we have one-way data flow (parent -> child) -->
  <!-- If we want to make it two-way we have to use emit -->
  <TasksMetaData v-model:taskRepStatus="taskRepStatus" />

  <RemainTasks :taskRepStatus />

  <DoneTasks :taskRepStatus />
</template>
