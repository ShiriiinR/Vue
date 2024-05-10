<template>
  <div class="flex flex-col justify-center items-center mb-7">
    <h2 class="text-violet-700 text-2xl mt-5 mb-4">Add Task</h2>
    <form @submit.prevent="submitForm" class="flex flex-col">
      <input
        type="text"
        placeholder="title"
        v-model="task.title"
        class="border rounded-md border-violet-700 mb-3 h-[35px] p-1"
      />
      <input
        type="text"
        placeholder="description"
        v-model="task.description"
        class="border rounded-md border-violet-700 mb-3 h-[35px] p-1"
      />
      <button class="w-[250px] h-[50px] bg-violet-700 text-white rounded-md text-xl">
        Add
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      task: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    ...mapActions(["createTask"]),
    submitForm() {
      this.createTask(this.task).then((createdTask) => {
        console.log("Task created successfully:", createdTask);
        this.task.title = "";
        this.task.description = "";
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
