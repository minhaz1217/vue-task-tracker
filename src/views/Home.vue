<script setup>
import Tasks from '../components/Tasks.vue';
import AddTask from '../components/AddTask.vue';
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import {fetchTasks, createTask, removeTask, setTaskToToggle } from "../services/TaskService"


const props = defineProps({
    showAddTask : Boolean
});

let tasks = ref([])

onMounted(async ()=>{
  tasks.value = await fetchTasks();
});

async function deleteTask(id){
  if(confirm("Are you sure?")){
    const data = await removeTask(id);
    if(data === true){
      tasks.value = tasks.value.filter( (x)=>x.id != id );
    }else{
      alert("Error on deleting");
    }
  }
}
async function toggleReminder(id){
  const data = await setTaskToToggle(id);
  tasks.value = tasks.value.map( (task)=> task.id == id ? { ...task, reminder: data.reminder } : task);
}

async function addTask(task){
  const data = await createTask(task);
  console.log("Data",task, data);
  tasks.value = [ ...tasks.value, data];
}
</script>

<template>
  <div v-if="showAddTask">
    <AddTask @add-task="addTask" />
  </div>
  <Tasks
    @toggle-reminder="toggleReminder"
    :tasks="tasks"
    @delete-task="deleteTask"
  />
</template>