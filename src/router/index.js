import { createRouter, createWebHistory } from 'vue-router';
import KakaoMap from '@/components/KakaoMap.vue';
const routes = [
    {
        path: '/map',
        name: 'map',
        component: KakaoMap
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(){
        return { top: 0 }
    },
});

export default router