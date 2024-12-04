import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Vue Router
import BootstrapVue3 from 'bootstrap-vue-3';

// Import Bootstrap and BootstrapVue styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

const app = createApp(App);


app.use(router);
app.use(BootstrapVue3);


app.mount('#app');
