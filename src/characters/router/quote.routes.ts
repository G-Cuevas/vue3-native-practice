import type { RouteRecordRaw } from "vue-router";

export const quoteRoutes: RouteRecordRaw[] = [
    {
        path: "list",
        name: "Lista de Frases",
        props: { title: "Lista de Frases", visible: true },
        component: () => import("../pages/QuoteList.vue"),
    },
    {
        path: ":id",
        name: "Frases por Id",
        props: { title: "Frases por Id", visible: true },
        component: () => import("../pages/QuoteId.vue"),
    },
    {
        path: "search",
        name: "Busqueda de frases",
        props: { title: "Busqueda de frases", visible: true },
        component: () => import("../pages/QuoteSearch.vue"),
    },
]