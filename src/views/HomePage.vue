<script setup>
import InputForm from '@/components/InputForm.vue'
import Tasks from '@/components/Tasks/Tasks.vue'
</script>

<template>
  <main class="w-full flex flex-col items-center">
    <div class="container sm:w-full md:w-[70%] px-5 py-5">
      <header class="text-5xl md:px-3 md:py-5 rounded-lg text-sky-300 text-center mb-5 bg-[#10172a]">
        TO-DO List
      </header>
      <section
        class="tasks_container md:min-h-[70vh] sm:w-full py-5 md:px-5 rounded-lg flex flex-col items-center gap-3 bg-[#10172a]"
      >
        <InputForm />

        <span class="block sm:w-full md:w-[70%] h-1 rounded-lg bg-amber-50 mb-3"></span>

        <Tasks />
      </section>
    </div>
  </main>
</template>
