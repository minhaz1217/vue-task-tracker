<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router'
import Button from './Button.vue';

defineProps({
    title: String,
    showAddTask: Boolean
});

const emit = defineEmits(['toggle-show-add-task']);
const route = useRoute()

const isHomePage = computed( ()=>{
    if(route.path === "/"){
        return true;
    }
    return false;
});
</script>


<template>
    <h1>{{ title }}</h1>
    <Button 
        v-show="isHomePage"
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