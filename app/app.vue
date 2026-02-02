<script setup lang="ts">
import './assets/main.css';

const count = ref(0);
const loading = ref(false);

// Fetch initial count
const { data } = await useFetch('/api/count');
if (data.value) {
  count.value = data.value.count;
  console.log(count.value)
}

async function increment() {
  loading.value = true;
  try {
    const response = await $fetch('/api/count', { method: 'POST' });
    count.value = response.count;
    console.log(count.value)
  } catch (error) {
    console.error('Error incrementing count:', error);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full">
      <h1 class="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          {{ count }}
      </h1>
      
      <div class="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-8 mb-8">
        <p class="text-gray-600 text-sm uppercase tracking-wide text-center mb-2">
        </p>
        <p class="text-6xl text-black md:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        
        </p>
      </div>
      
      <button
        @click="increment"
        :disabled="loading"
        class="w-full bg-gradient-to-r  from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        <span v-if="!loading">Increment Counter</span>
        <span v-else>Updating...</span>
      </button>
      
  
    </div>
  </div>
</template>
