import { storeToRefs } from 'pinia';

import { useTodoStore } from '@/stores/useTodoStore';

export default () => {
    const todoStore = useTodoStore();

    const { data, getTodo, getAllTodo } = storeToRefs(todoStore);
    const { addTodo, completeTodo, removeTodo } = todoStore;

    return { data, getTodo, getAllTodo, addTodo, completeTodo, removeTodo };
};
