<script setup lang="ts">
    import { provide } from 'vue';

    import TodoList from '@/components/TodoList.vue';

    provide('author', 'Vuong Vu');
</script>

<template>
    <TodoList />
</template>
