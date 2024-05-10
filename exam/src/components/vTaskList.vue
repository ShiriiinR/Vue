<template>
  <div class="flex flex-col items-center gap-2">
    <VAddTask />
    <div>
      <h2  class="text-violet-700 text-2xl">Search by date:</h2>
      <form class="dateForm" @submit.prevent="searchByDate(taskReq, date)">
        <input class="limit" v-model="date" type="text" placeholder="2024-05-09">
        <button class="border border-violet-700 rounded-md px-4 py-2 bg-violet-700 text-white" type="submit">click</button>
      </form>
    </div>
    <div class="grid grid-cols-2 gap-3">
      <slot />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import VAddTask from "./vAddTask.vue";
import VTask from "./vTask.vue";

export default {
  components: {
    VAddTask,
    VTask,
  },
  methods:{
    ...mapActions(['searchTaskByDate']),
    searchByDate(taskReq,Date){
      let newTaskReq= {
        date: Date
      }
      this.searchTaskByDate(newTaskReq)
    }
  }
};
</script>

<style lang="scss" scoped></style>
