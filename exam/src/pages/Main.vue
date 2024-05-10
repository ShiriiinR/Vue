<template>
  <div>
    <VHeader />
    <VTaskList>
      <VTask
        v-for="task in getTasks.data"
        :key="task.id"
        :task="task"
        @markDone="markTaskDone(task.id)"
        @selectTask="selectTask(task)"
      />
      <vue-awesome-paginate
    :total-items="loadTasks.data"
    :items-per-page="queryParams.limit"
    :max-pages-shown="5"
    v-model="queryParams.page"
    :on-click="navigate"
  />
    </VTaskList>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VHeader from "../components/vHeader.vue";
import VTaskList from "../components/vTaskList.vue";
import VTask from "../components/vTask.vue";

export default {
  components: {
    VTaskList,
    VHeader,
    VTask,
  },
  data(){
    return{
      queryParams:{
        page: 1,
        limit: 15
      }
    }
  },
  methods: {
    ...mapActions(["loadTasks", "markTaskDone"]),
    navigate(page){
      this.queryParams.page = page
      this.loadTasks(this.queryParams)
    }
  },
  computed: {
    ...mapGetters(["getTasks"]),
    tasks() {
      return this.getTasks;
    },
  },
  created() {
    this.loadTasks(this.queryParams);
  },
};
</script>

<style>
.pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>
