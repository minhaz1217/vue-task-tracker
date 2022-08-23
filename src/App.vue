<script setup>
import { createDOMCompilerError } from '@vue/compiler-dom';
import { onMounted, ref } from '@vue/runtime-core';
import Header from './components/Header.vue';
import Tasks from './components/Tasks.vue';

let tasks = ref([])
onMounted(()=>{
  tasks.value = [
    {
      id: 1,
      text: "Doctors Appointment 1",
      day: "Marth 1st at 2:30 pm",
      reminder: true
    },
    {
      id: 2,
      text: "Doctors Appointment 2",
      day: "Marth 1st at 2:30 pm",
      reminder: false
    },
    {
      id: 3,
      text: "Doctors Appointment 3",
      day: "Marth 1st at 2:30 pm",
      reminder: true
    },
    {
      id: 4,
      text: "Doctors Appointment 4",
      day: "Marth 1st at 2:30 pm",
      reminder: true
    },
    {
      id: 5,
      text: "Doctors Appointment 5",
      day: "Marth 1st at 2:30 pm",
      reminder: false
    },
    {
      id: 6,
      text: "Doctors Appointment 6",
      day: "Marth 1st at 2:30 pm",
      reminder: false
    }
  ];
});
</script>

<template>
  <div class="container">
    <Header title="Task Tracker"/>
    <Tasks :tasks="tasks"/>
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