import { createRouter, createWebHistory } from 'vue-router';
import Project from '../components/Project.vue';
import Home from '../components/Home.vue';
import NotFound from '../components/404.vue';
import Profile from '../components/Profile.vue';
import Analytics from '../components/Analytics.vue';
import Budjet from '../components/Budjet.vue';
import Notifications from '../components/Notifications.vue';
import Settings from '../components/Settings.vue';

const routes = [
    { path: '/projects/:id?', component: Home, children: [
        { path:'', name:'project' ,component:Project},
        { path:'analytics', name:'analytics' ,component:Analytics},
        { path:'budjet', name:'bidjet' ,component:Budjet},
        { path:'profile', name:'profile' ,component:Profile},
        { path:'notification', name:'notification' ,component:Notifications},
        { path:'settings', name:'settings' ,component:Settings},

    ] },
    { path:'/:catchAll(.*)', component:NotFound},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
