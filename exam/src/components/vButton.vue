<template>
    <button
    class="border w-[150px] mb-3 border-violet-700 rounded-md px-4 py-2 bg-violet-700 text-white">
      {{ text }}
    </button>
  </template>
  
  <script>
  export default {
    name: "vButton",
    props: ['text']
  }
  </script>
  
  <style scoped>
  
  </style>