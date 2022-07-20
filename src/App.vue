<script setup lang="ts">
    import { provide } from 'vue';

    provide('author', 'Vuong Vu');
</script>

<template>
    <router-view />
</template>
