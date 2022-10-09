import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Router from './router';
import Store from './store';


const app = createApp(App);
app.use(Router);
app.use(Store);
app.mount('#app');
