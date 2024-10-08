import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Toolbar from 'primevue/toolbar';
import Card from 'primevue/card';
import i18n from './i18n';

/* createApp(App).mount('#app') */

const app = createApp(App);

app.use(i18n);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});

app.component("pv-toolbar", Toolbar);
app.component("pv-card", Card);

app.mount('#app');