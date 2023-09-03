<script setup lang="ts">
const props = defineProps<{ title: string, visible: boolean }>();

</script>

<template>
  <h2 v-if="props.visible" >{{ props.title }}</h2>
</template>

<style scoped>

</style>
