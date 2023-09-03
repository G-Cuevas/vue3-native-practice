<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ title: string, visible: boolean }>();

const counter = ref(0)

</script>

<template>
  <header>
    <div class="wrapper">
      <h1 v-if="props.visible" >{{ props.title }}</h1>
      <p>Counter: {{ counter }}</p>
      <button
        @click="counter++">+1</button
      >
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