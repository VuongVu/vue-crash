<script setup lang="ts">
    import { PropType } from 'vue';
    import { CheckIcon, XIcon } from '@heroicons/vue/solid';
    import type { Todo } from '@/stores/useTodoStore';
    import useTodo from '@/composables/useTodo';

    const { removeTodo, completeTodo } = useTodo();

    defineProps({
        todo: {
            type: Object as PropType<Todo>,
            required: true,
        },
    });
</script>

<template>
    <span :class="{ 'line-through italic': todo.completed }">
        {{ todo.content }}
    </span>
    <CheckIcon
        :class="['h-5 text-green-500 hover:cursor-pointer', todo.completed && 'hidden']"
        @click="completeTodo(todo.id)" />
    <XIcon class="h-5 text-red-500 hover:cursor-pointer" @click="removeTodo(todo.id)" />
</template>
