import {createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue';
import SkumCaseStudy from '../views/SkumCaseStudy.vue';
import AboutPage from '../views/AboutPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/portfolio/skum',
        name: 'Skum Case Study',
        component: SkumCaseStudy,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage,
    },
]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;