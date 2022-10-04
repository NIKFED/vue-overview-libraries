import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import HelloWorld from "./components/HelloWorld.vue";

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/home', component: Home },
    { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;