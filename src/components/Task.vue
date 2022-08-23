<script setup>
    defineProps({
        task: Object
    });
</script>
<template>
    <div :class="[ task.reminder ? 'reminder' : '', 'task' ]">
        <h3>
            {{task.text}}
            
            <i class="fas fa-close"></i>
        </h3>
        <p3>{{task.day}}</p3> 
    </div>
</template>

<style scoped>
    .fas{
        color: red;
    }
    .task{
        background: #f4f4f4;
        margin: 5px;
        padding: 10px 20px;
        cursor: pointer;
    }
    .task.reminder{
        border-left: 5px solid green;
    }
    .task h3{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>