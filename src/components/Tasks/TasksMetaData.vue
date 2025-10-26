<script setup lang="ts">
import { useTaskStore } from '@/stores/counter'

const taskStore = useTaskStore()
const props = defineProps({
  taskRepStatus: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:taskRepStatus'])
function updateRepStatus(status) {
  emit('update:taskRepStatus', status)
}
</script>

<template>
  <div class="button_container flex mb-5 sm:w-full md:w-[70%] justify-between">
    <div class="flex gap-2">
      <button
        @click="updateRepStatus('all')"
        class="rounded-lg hover:bg-amber-50 hover-transition hover:cursor-pointer bg-orange-400 px-2 py-1"
      >
        All Tasks
      </button>
      <button
        @click="updateRepStatus('fav')"
        class="rounded-lg hover:bg-amber-50 hover-transition hover:cursor-pointer bg-orange-400 px-2 py-1"
      >
        Favorite Tasks
      </button>
    </div>
    <p v-if="taskRepStatus === 'all'" class="bg-amber-50 rounded p-1">
      Total Items: {{ taskStore.totalItemsCount }}
    </p>
    <p v-if="taskRepStatus === 'fav'" class="bg-amber-50 rounded p-1">
      Favorite Items: {{ taskStore.favCounts }}
    </p>
  </div>
</template>
