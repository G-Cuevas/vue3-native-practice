<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import { quoteRoutes } from '../router/quote.routes';
import { Suspense } from 'vue';

const props = defineProps<{ title: string, visible: boolean }>();


</script>

<template>
  <h1 v-if="props.visible" >{{ props.title }}</h1>
  <NavBar
  :routes="quoteRoutes"
  :vertical="false"
  />
  <!-- <Suspense> -->
    <router-view />
  <!-- </Suspense> -->
</template>

<style scoped>

</style>