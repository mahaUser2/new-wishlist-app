import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@/views/WishlistView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/toys/:slug", // When the user hits /toys/<anything...> then show the ToyPageView. the :slug part is send to the ToyPageView with the identifier "slug"
    name: "toypage",
    component: () => import("@/views/ToyPageView.vue"),
  },
  {
    // This matches anything that has not been matched yet - in other words its a fallback and will show the 404 page
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/Page404View.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
