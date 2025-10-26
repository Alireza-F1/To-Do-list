<script setup lang="ts">
import { useTaskStore } from '@/stores/counter'

const taskStore = useTaskStore()
defineProps({
  taskRepStatus: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <p class="text-amber-50" :class="{ hidden: taskStore.items.length === 0 }">Tasks</p>
  <div
    v-for="item in taskStore.items"
    :class="{
      hidden: (!item.isFav && taskRepStatus === 'fav') || item.done,
      'bg-sky-400': !item.done,
    }"
    class="item sm:w-full md:w-[70%] py-3 px-5 rounded-xl flex justify-between hover-transition hover:bg-sky-600"
  >
    <p class="task_content">{{ item.name }}</p>
    <div class="icons flex gap-2">
      <button
        class="bg-amber-400 rounded-lg px-[5px] py-0.5 hover-transition hover:bg-green-500 hover:cursor-pointer"
        @click="taskStore.doneTasks(item.id)"
      >
        Done
      </button>
      <svg
        @click="taskStore.deletion(item.id)"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 hover:text-red-500 hover:cursor-pointer hover-transition"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        />
      </svg>
      <svg
        @click="taskStore.addToFav(item.id)"
        :class="{ 'text-red-500': item.isFav }"
        class="size-6 hover:text-red-500 hover:cursor-pointer hover-transition"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
        />
      </svg>
    </div>
  </div>
</template>
