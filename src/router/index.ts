import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import PostListVue from '@/components/post/PostList.vue';
import TodoListVue from '@/components/todo/TodoList.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: PostListVue,
    },
    {
        path: '/todo',
        component: TodoListVue,
    },
];

const route = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default route;
