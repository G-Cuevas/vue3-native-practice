<script setup lang="ts">
import CardList from '@/characters/components/CardList.vue';
import { useQuotes } from '../composables/useQuotes';

const props = defineProps<{ title: string, visible: boolean }>();

const { quotes, isLoading, isError, errorMessage } = useQuotes();
    
</script>

<template>
  <h2 v-if="props.visible" >{{ props.title }}</h2>

  <h2 v-if="isLoading" > Loading... </h2>
  <h2 v-if="isError" > {{ errorMessage }} </h2>

  <CardList :list="quotes" />
</template>

<style scoped>

</style>