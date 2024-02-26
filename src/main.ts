
import { createApp } from 'vue'
import 'vue3-carousel/dist/carousel.css'

import './index.css'
import './assets/main.css'
import App from './App.vue'
// createApp(App).mount('#app')

import VueGoogleMaps from '@fawmi/vue-google-maps';
const app = createApp(App);
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCYNBxdfBoKeIAfVjOcsr-fCyP8uwcejDg',
  },
}).mount('#app');
