import { createRouter, createWebHashHistory } from 'vue-router';
import AppMain from '../AppMain.vue';

const routes = [
    {
        path: '/',
        component: AppMain
    }
]

export const router = createRouter({
    //为了简单起见，在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes
})