<script setup>
import Button from './Button.vue';

defineProps({
    title: String
});

</script>


<template>
    <h1>{{ title }}</h1>
    <Button text="Add task" color="green" />
</template>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>