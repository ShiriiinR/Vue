<template>
  <div
    :class="{ 'done-task': task.done }"
    class="w-[300px] flex flex-col border border-violet-700 rounded-md px-2 py-4"
  >
    <h3 class="text-violet-700 text-2xl">Title:</h3>
    <p class="text-xl">{{ task.title }}</p>
    <h3 class="text-violet-700 text-2xl">Description:</h3>
    <p class="text-xl">{{ task.description }}</p>
    <div class="flex gap-2 mt-3">
      <!-- <input type="checkbox" :checked="task.isDone"> -->
      <button
        class="border border-violet-700 rounded-md px-4 py-2 bg-violet-700 text-white"
        @click="markDone"
      >
        Mark Done
      </button>
      <button
        v-if="!editMode"
        class="border border-violet-700 rounded-md px-4 py-2 bg-violet-700 text-white"
        @click="enableEditMode"
      >
        Edit
      </button>
      <button
        class="border border-violet-700 rounded-md px-4 py-2 bg-violet-700 text-white"
        @click="removeTask(task.id)"
      >
        Delete
      </button>
    </div>
    <div v-if="editMode">
      <h3 class="text-violet-700 text-xl mt-5 mb-3">Edit Task:</h3>
      <form class="flex flex-col" @submit.prevent="updateTask(editedTask)">
        <label class="text-violet-700 text-2xl">Title:</label>
        <input type="text" name="title" v-model="editedTask.title" />
        <label class="text-violet-700 text-2xl">Description:</label>
        <textarea name="description" v-model="editedTask.description"></textarea>
        <button
          class="border w-[150px] mb-3 border-violet-700 rounded-md px-4 py-2 bg-violet-700 text-white"
          type="submit"
        >
          Save
        </button>
        <button
          class="border w-[150px] mb-3 border-violet-700 rounded-md px-4 py-2 bg-violet-700 text-white"
          type="button"
          @click="cancelEdit"
        >
          Cancel
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    task: {
      type: Object,
    },
  },
  data() {
    return {
      editMode: false,
      editedTask: { ...this.task },
    };
  },
  methods: {
    ...mapActions(["markTaskDone", "deleteTask", "updateTask"]),
    markDone() {
      this.markTaskDone(this.task.id);
    },
    removeTask(id) {
      this.deleteTask(id);
    },
    enableEditMode() {
      this.editMode = true;
    },
    cancelEdit() {
      this.editMode = false;
    },
    sendUpdatedTask() {
      this.updateTask(this.editedTask);
      this.editMode = false;
    },
  },
};
</script>

<style scoped>
.done-task {
  background-color: lightgrey;
}
</style>
