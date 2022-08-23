<script setup>
import { onMounted } from "@vue/runtime-core";
import Task from "./Task.vue";

const props = defineProps({
    tasks : Array
});

onMounted(()=>{
    console.log(props);
});
</script>


<template>
    <div v-for="task in tasks" v-bind:key="task.id">
        <Task :task="task"/>
    </div>
</template>