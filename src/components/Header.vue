<script setup>
import Button from './Button.vue';

defineProps({
    title: String,
    showAddTask: Boolean
});

const emit = defineEmits(['toggle-show-add-task']);

</script>


<template>
    <h1>{{ title }}</h1>
    <Button 
        @btn-clicked="$emit('toggle-show-add-task')" 
        :text="showAddTask ? 'Close': 'Add task'" 
        :color="showAddTask ? 'red': 'green'" 
    />
</template>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>