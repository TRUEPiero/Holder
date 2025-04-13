import { createRouter, createWebHistory } from 'vue-router';
import Project from '../components/Project.vue';
import NotFound from '../components/404.vue';



const routes = [
    { path: '/projects/:id', component: Project },
    { path:'/:catchAll(.*)', component:NotFound},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
