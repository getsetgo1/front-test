import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.js'

import { useKakao } from 'vue3-kakao-maps/@utils';
const app = createApp(App);
useKakao('03a055c21377bee26ab1559dedf4af6f',['clusterer', 'services', 'drawing']);
app.use(router);
app.mount('#app')
