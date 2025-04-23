import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router"
import "normalize.css/normalize.css"
import { createPinia } from "pinia"
import "@/style/index.scss"
import "uno.css"

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount("#app")
