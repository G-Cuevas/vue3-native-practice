import { createRouter, createWebHistory } from "vue-router"
import { appRoutes } from "@/router/routes";


export const router = createRouter({
    history: createWebHistory(),
    routes: appRoutes,
});







