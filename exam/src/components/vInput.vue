<template>
    <input
        class="px-4 outline-none border border-violet-700 rounded-md py-2"
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue',
             type === 'file'? $event.target.files[0]:$event.target.value)"
        :placeholder="placeholder">
  </template>
  
  <script>
  export default {
    name: "vInput",
    props: ['placeholder', 'type', 'modelValue']
  }
  </script>
  
  <style scoped>
  
  </style>