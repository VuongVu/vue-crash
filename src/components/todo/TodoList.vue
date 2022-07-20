<script setup lang="ts">
    import useTodo from '@/composables/useTodo';
    import TodoItem from '@/components/todo/TodoItem.vue';
    import AddTodo from '@/components/todo/AddTodo.vue';

    const { data } = useTodo();
</script>

<template>
    <div class="pt-20">
        <div class="mb-5 text-lg text-center font-semibold">Todo List</div>

        <div class="grid grid-flow-row gap-y-5 m-auto w-1/2 p-10 shadow-xl rounded-xl bg-white">
            <div>
                <AddTodo class="mb-5" />

                <ul class="grid grid-flow-row gap-y-2">
                    <li v-for="todo in data" :key="todo.id" class="flex space-x-2">
                        <TodoItem :todo="todo" />
                    </li>
                    <p v-if="!data.length">No todo found</p>
                </ul>
            </div>
        </div>
    </div>
</template>
