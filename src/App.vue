<script setup>
import { createDOMCompilerError } from '@vue/compiler-dom';
import { onMounted, ref } from '@vue/runtime-core';
import Header from './components/Header.vue';
import Tasks from './components/Tasks.vue';
import AddTask from './components/AddTask.vue';
import {fetchTasks} from "./services/TaskService"

let tasks = ref([])
let showAddTask = ref(false);
onMounted(async ()=>{
  tasks.value = await fetchTasks();
});

function deleteTask(id){
  if(confirm("Are you sure?")){
    tasks.value = tasks.value.filter( (x)=>x.id != id );
  }
}
function toggleReminder(id){
  tasks.value = tasks.value.map( (task)=> task.id == id ? { ...task, reminder: !task.reminder } : task);
}

function addTask(task){
  tasks.value = [ ...tasks.value, task];
}

function toggleShowAddTask(){
  showAddTask.value = !showAddTask.value;
}

</script>

<template>
  <div class="container">
    <Header 
      @toggle-show-add-task="toggleShowAddTask"
      title="Task Tracker"
      :showAddTask="showAddTask" />
    <div v-if="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks @toggle-reminder="toggleReminder" :tasks="tasks" @delete-task="deleteTask"/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>