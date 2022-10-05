import { createRouter, createWebHistory, RouteRecordRaw, } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Example",
    component: () => import("../modules/pages/ExamplePage.vue")
  },
  {
    path: "/episodes",
    name: "Episodes",
    component: () => import("../modules/pages/EpisodesPage.vue")
  },
  {
    path: "/episode",
    name: "Episode",
    component: () => import("../modules/pages/EpisodePage.vue")
  },
  {
    path: "/characters",
    name: "Characters",
    component: () => import("../modules/pages/CharactersPage.vue")
  },
  {
    path: "/character",
    name: "Character",
    component: () => import("../modules/pages/CharacterPage.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../modules/pages/AboutPage.vue")
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router