import { createRouter, createWebHistory } from "vue-router";

// テンプレート
import Top from "./views/post_images/PostImageTop.vue";
import About from "./views/post_images/PostImageAbout.vue";

const routes = [
  {
    path: "/",
    component: Top,
  },
  {
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
