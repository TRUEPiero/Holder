import axios from 'axios';
import { createApp } from 'vue';
import App from './components/App.vue';
import router from './routes';

// Настройка Axios для отправки AJAX-запросов
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Инициализация Vue и подключение маршрутизации
const app = createApp(App);
app.use(router);
app.mount('#app');
