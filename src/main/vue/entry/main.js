import { createApp } from 'vue'
import App from '@aroka/App'
import { router } from '@/router/routes'

createApp(App)
    .use(router)
    .mount('#app')
