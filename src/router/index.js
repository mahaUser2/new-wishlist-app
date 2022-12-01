import {createRouter, createWebHashHistory} from "vue-router";
import WishlistView from "../views/WishlistView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: WishlistView,
  },
  {
    path: "/toys/:slug",
    name: "toys",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "toys" */ "../views/ToyView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "page404",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "404page" */ "../views/Page404View.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
