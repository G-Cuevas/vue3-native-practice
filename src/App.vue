<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from '@/shared/components/NavBar.vue';
import { appRoutes } from './router/routes';

</script>

<template>
  <div class="wrapper">
    <header>
      <NavBar
        title="Breaking Bad"
        :routes="appRoutes"
        :show-icon="true"
      />
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
}

.wrapper {
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

header {
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

main {
  display: flex;
  flex-direction: column;
  text-align: start;
}

</style>