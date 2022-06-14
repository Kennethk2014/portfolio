import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import VueKinesis from 'vue-kinesis';
import VueGtag from 'vue-gtag';


createApp(App)
.use(router)
.use(VueGtag, {
    config: {id: 'UA-209804149-1'}
})
.use(VueKinesis)
.mount('#app')
import 'bootstrap/dist/js/bootstrap.js';