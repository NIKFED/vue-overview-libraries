import { createWebHashHistory, createRouter } from "vue-router";
import Main from './components/Main.vue';
import TaskMain from './components/Task/TaskMain.vue';

const routes = [
    { path: '/', component: Main },
    { path: '/task-list', component: TaskMain },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;