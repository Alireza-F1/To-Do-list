import { defineStore } from 'pinia'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hkoersfarhmvvehaoykd.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhrb2Vyc2ZhcmhtdnZlaGFveWtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NjM1MjEsImV4cCI6MjA3NjEzOTUyMX0.5aSWAHUgeHiIYxnfzWdduQRx32HEP_uTTo8sKRNx6tE'
  
const supabase = createClient(supabaseUrl, supabaseKey)

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    items: [],
    loading: false,
    error: null,
  }),

  getters: {
    totalItemsCount() {
      return this.items.length
    },

    favItems() {
      return this.items.filter((item) => item.isFav === true && item.done === false)
    },

    favCounts() {
      return this.favItems.length
    },
  },

  actions: {
    async fetchItems() {
      this.loading = true
      try {
        const { data, error } = await supabase.from('ToDoTasks').select('*')
        if (error) throw error
        this.items = data
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    async addItem(task) {
      try {
        const { data, error } = await supabase.from('ToDoTasks').insert([task]).select()
        if (error) throw error
        this.items.push(data[0])
      } catch (error) {
        this.error = error.message
      }
    },

    async deletion(id) {
      try {
        const { error } = await supabase.from('ToDoTasks').delete().eq('id', id)
        if (error) throw error
        this.items = this.items.filter((item) => item.id !== id)
      } catch (error) {
        this.error = error.message
      }
    },
    async addToFav(id) {
      const item = this.items.find((i) => i.id === id)
      if (!item) return

      const updated = { ...item, isFav: !item.isFav }

      try {
        const { error } = await supabase.from('ToDoTasks').update(updated).eq('id', id)
        if (error) throw error
        item.isFav = !item.isFav
      } catch (error) {
        this.error = error.message
      }
    },
    async doneTasks(id) {
      const item = this.items.find((i) => i.id === id)
      if (!item) return

      const updated = { ...item, done: !item.done }

      try {
        const { error } = await supabase.from('ToDoTasks').update(updated).eq('id', id)
        if (error) throw error
        item.done = !item.done
      } catch (error) {
        this.error = error.message
      }
    },
  },
})
