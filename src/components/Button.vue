<script setup>
defineProps({
    text: String,
    color: String
});

function onclick(){
    console.log("Hi");
}
</script>
<template>
    <button v-on:click="onclick" :style="{background: color}" class="btn">{{text}}</button>
</template>