<script setup>
defineProps({
    text: String,
    color: String
});

const emit = defineEmits(['btn-clicked']);
function onclick(){
    emit("btn-clicked");
}
</script>
<template>
    <button 
    v-on:click="onclick" 
    :style="{background: color}" 
    class="btn">
        {{text}}
    </button>
</template>