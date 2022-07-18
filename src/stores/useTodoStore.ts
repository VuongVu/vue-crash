import { defineStore } from 'pinia';

export interface Todo {
    id: number;
    content: string;
    completed: boolean;
}

const mockData: Todo[] = [
    {
        id: 1,
        content: 'Setup Vue project',
        completed: true,
    },
    {
        id: 2,
        content: 'Learn Vue',
        completed: false,
    },
    {
        id: 3,
        content: 'Learn Pinia',
        completed: false,
    },
];

export const useTodoStore = defineStore('todos', {
    state: () => ({
        data: mockData,
    }),
    getters: {
        getTodo: (state) => {
            return (id: number) => state.data.find((todo) => todo.id === id);
        },
        getAllTodo: (state) => state.data,
    },
    actions: {
        addTodo(todo: Omit<Todo, 'id'>) {
            this.data.push({ id: this.data.length + 1, ...todo });
        },
        completeTodo(id: number) {
            const selectTodo = this.data.find((todo) => todo.id === id);

            if (!selectTodo) return;

            this.data.splice(this.data.indexOf(selectTodo), 1, {
                ...selectTodo,
                completed: true,
            });
        },
        removeTodo(id: number) {
            this.data.splice(
                this.data.findIndex((todo) => todo.id === id),
                1,
            );
        },
    },
});
