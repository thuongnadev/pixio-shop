import "bootstrap";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
//import "@/assets/other/bootstrap-select/css/bootstrap-select.css";
import "animate.css";
import "@/assets/other/swiper/swiper-bundle.css";
import "@/assets/css/skin/skin-1.css";
import "@/assets/css/style.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";


const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
