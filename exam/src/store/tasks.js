import axios from "axios";

export default {
    state() {
        return {
            tasks: [],
            selectedTask: null,
            editMode: false
        }
    },
    mutations: {
        addTask(state, tasks) {
            state.tasks = tasks; 
        },
        updateTask(state, updatedTask) {
          state.tasks = updatedTask
          const index = state.tasks.findIndex(task => task.id === updatedTask.id);
          if (index !== -1) {
            state.tasks.splice(index, 1, updatedTask);
          }
        },
        removeTask(state, taskId) {
          
          for (let i = 0; i < state.tasks.length; i++) {
            if (state.tasks[i].id === taskId) {
              state.tasks.splice(i, 1);
              break;
            }
          }
        },
        setSelectedTask(state, task) {
          state.selectedTask = task;
        },
        setEditMode(state, mode) {
          state.editMode = mode;
        },
    },
    getters: {
        getTasks(state){
            // console.log(state.tasks);
            return state.tasks
        }
    },
    actions: {
        createTask({ commit, dispatch }, taskData) {
            axios.post('https://test.ai-softdev.com/tasks', taskData, {
                headers:{
                    Authorization: `${localStorage.getItem('token')}`
                },
                
            })
              .then(response => {
                  console.log(response.data.data);
                commit('addTask', response.data);
                dispatch('loadTasks');
              });
        },
        loadTasks({ commit }, params) {
            axios.get(`https://test.ai-softdev.com/tasks?page=${params.page}&limit=${params.limit}`, {
              headers: {
                Authorization: `${localStorage.getItem('token')}`
              }
            })
            .then(response => {
              console.log(response.data.data);
              commit('addTask', response.data);
            })
            .catch(error => {
              console.error('Failed to load tasks:', error);
            });
        },
        markTaskDone({ commit }, taskId) {
          axios.patch(`https://test.ai-softdev.com/tasks/done/${taskId}`, {}, {
            headers: {
              Authorization: `${localStorage.getItem('token')}`
            }
          })
          .then(response => {
            console.log('makr as done');
            
            console.log(response.data.data);
            commit('addTask', response.data);
            
          })
          .catch(error => {
            console.error('Failed to mark task as done:', error);
          });
        },
        deleteTask({ commit }, taskId) {
          axios.delete(`https://test.ai-softdev.com/tasks/${taskId}`, {
              headers: {
                  Authorization: `${localStorage.getItem('token')}`
              }
          })
          .then(res => {
              console.log('Task deleted');
              commit('removeTask', taskId);
              commit('addTask', res.data)
          })
          .catch(error => {
              console.error('Failed to delete task:', error);
          });
      },
      selectTask({ commit }, task) {
        commit("setSelectedTask", task);
        commit("setEditMode", false); 
      },
      enableEditMode({ commit }) {
        commit("setEditMode", true);
      },
       updateTask({ commit }, updatedTask) {
        console.log(updatedTask);
        
          const fd = new FormData()
          fd.append('title', updatedTask.title)
          fd.append('description', updatedTask.description)
          axios.put(
            `https://test.ai-softdev.com/tasks/${updatedTask.id}?page=1&limit=15`,
            updatedTask,
            {
              headers: {
                Authorization: `${localStorage.getItem("token")}`
              }
            }
          )
          .then(res => {
            console.log(res);
            console.log(updatedTask.target);  
            commit("addTask", res.data);
          commit("setSelectedTask", null); 
          commit("setEditMode", false); 
          })
        
        
      },
      searchTaskByDate({commit}, data){
        axios.get(`https://test.ai-softdev.com/tasks/${data.date}?page=1&limit=15`, {
            headers: {
                Authorization: `${localStorage.getItem('token')}`
            }
        }).then(response => {
            commit('updateTask', response.data.data)
            console.log(response.data.data);
        })
    },
    }
    
}