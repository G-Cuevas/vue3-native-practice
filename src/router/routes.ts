import { quoteRoutes } from "@/characters/router/quote.routes";
import type { RouteRecordRaw } from "vue-router";

export const appRoutes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Inicio",
        props: { title: "Inicio", visible: true },
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/about",
        name: "Acerca de",
        props: { title: "Acerca de", visible: true },
        component: () => import("../views/About.vue"),
    },
    {
        path: "/quotes",
        redirect: "/quotes/list",
        name: "Frases",
        props: { title: "Frases", visible: true },        
        component: () => import("./../characters/layout/QuoteLayout.vue"),
        children: quoteRoutes
    },
    // Default
    {
        path: "/:pathMatch(.*)*",
        redirect: () => ({ name: "Inicio" }),
    },
]