<template>
    <form
        enctype="multipart/form-data"
        class="max-w-[500px] mx-auto items-center flex flex-col gap-4 border border-violet-700 rounded-xl px-4 py-2 mt-4"
        @submit.prevent="$emit('formSubmit')">
      <slot/>
    </form>
  </template>
  
  <script>
  export default {
    name: "vForm"
  }
  </script>
  
  <style scoped>
  
  </style>