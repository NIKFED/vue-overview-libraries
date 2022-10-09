import { createWebHashHistory, createRouter } from "vue-router";
import Main from './components/Main.vue';
import TaskMain from './components/Task/TaskMain.vue';
import DesireMain from './components/Desire/DesireMain.vue';

const routes = [
    { path: '/', component: Main },
    { path: '/task-list', component: TaskMain },
    { path: '/desires', component: DesireMain },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;