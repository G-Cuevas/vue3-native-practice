<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router';

interface Props {
    title?: string;
    routes: RouteRecordRaw[];
    showIcon?: boolean;
    vertical?: boolean;
}

const props = withDefaults(defineProps<Props>(),
    {
        showIcon: false,
        vertical: true,
        background: 'black',
    }
)

</script>

<template>
    <nav
        class="container"
        :class="{
            'container-horizontal': !props.vertical,
            'container-vertical': props.vertical,
        }"
    >
        <div>
            <img v-if="props.showIcon" src="@/assets/logo.svg" alt="vue" height="25" width="25">
            <span v-if="props.title"> {{ props.title }} </span>
        </div>
        
        <RouterLink
            v-for="route of routes"
            :key="route.path"
            :to="route.path"
        >
            {{ route.name }}
        </RouterLink>
        <br>    
    </nav>
</template>

<style scoped>
nav {
    font-size: 20px;
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: max-content;
    height: 100%;
}

.container {
    margin-right: 5px;
    align-items: left;
}

.container-horizontal {
    flex-direction: row;
}

.container-vertical {
    flex-direction: column;
}

img {
    margin-right: 5px;
}

span {
    margin-right: 10px;
}

a {
    margin-right: 5px;
}

.router-link-active {
    color: gray;
    text-decoration: underline;
    font-weight: bold;
}

</style>