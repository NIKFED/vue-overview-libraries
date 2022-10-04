import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Router from './router';


const app = createApp(App);
app.use(Router);
app.mount('#app');
