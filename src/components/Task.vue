<script setup>
    const emit = defineEmits(['delete-task']);
    defineProps({
        task: Object
    });

    function onDelete(id){
        emit("delete-task", id);
    }
</script>
<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[ task.reminder ? 'reminder' : '', 'task' ]">
        <h3>
            {{task.text}}
            
            <i @click="onDelete(task.id)" class="fas fa-close"></i>
        </h3>
        <h3>{{task.day}}</h3> 
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