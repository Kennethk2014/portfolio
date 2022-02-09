import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import VueKinesis from 'vue-kinesis';



createApp(App)
.use(router)
.use(VueKinesis)
.mount('#app')
import 'bootstrap/dist/js/bootstrap.js';