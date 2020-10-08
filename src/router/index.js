import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Write from "../views/Write.vue";
import SingleBlog from "../components/SingleBlog.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about-us",
    name: "About",
    component: About
  },
  {
    path: "/write",
    name: "Write",
    component: Write
  },
  {
    path: "/blog/:id",
    name: "SingleBlog",
    component: SingleBlog
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
