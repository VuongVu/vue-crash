<script setup lang="ts">
    import { computed, inject, PropType } from 'vue';
    import { CheckIcon, XIcon } from '@heroicons/vue/solid';
    import type { Todo } from '@/stores/useTodoStore';
    import useTodo from '@/composables/useTodo';

    const { removeTodo, completeTodo } = useTodo();

    const props = defineProps({
        todo: {
            type: Object as PropType<Todo>,
            required: true,
        },
    });

    const hasCompleted = computed(() => props.todo.completed);

    const author = inject('author');
</script>

<template>
    <span :class="{ 'line-through italic': hasCompleted }"> {{ `${todo.content} - ${author}` }} </span>
    <CheckIcon
        :class="['h-5 text-green-500 hover:cursor-pointer', hasCompleted && 'hidden']"
        @click="completeTodo(todo.id)" />
    <XIcon class="h-5 text-red-500 hover:cursor-pointer" @click="removeTodo(todo.id)" />
</template>
