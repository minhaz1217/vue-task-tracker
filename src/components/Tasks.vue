<script setup>
import { onMounted } from "@vue/runtime-core";
import Task from "./Task.vue";
defineEmits(['delete-task']);
const props = defineProps({
    tasks : Array
});

onMounted(()=>{
    // console.log(props);
});
</script>


<template>
    <div v-for="task in tasks" v-bind:key="task.id">
        <Task @delete-task="$emit('delete-task', task.id)" :task="task"/>
    </div>
</template>