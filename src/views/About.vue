<script setup lang="ts">
const props = defineProps<{ title: string, visible: boolean }>();

</script>

<template>
  <header>
    <div class="wrapper">
      <h1 v-if="props.visible" >{{ props.title }}</h1>
    </div>
  </header>

  <main>
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>