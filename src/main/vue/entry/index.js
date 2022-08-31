import { createApp } from 'vue'

import App from '@aroka/App'
import { router } from '@/router/routes'

import game from '@/store/game'

createApp(App)
    .use(router)
    .use(game)
    .mount('#app')
