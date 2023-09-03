<script setup lang="ts">

interface Props {
    list?: any[];
}

const props = defineProps<Props>();

</script>

<template>
  <ul>
        <li
        v-for="item in props.list"
        >
          {{ item.quote }}
          <br>
          <span>{{ item.author }}</span>
          <br>
          <br>
        </li>
  </ul> 
</template>

<style>
  ul {
    font-size: 15px;
    margin-top: 10px;
  }

  span {
    font-weight: bold;
  }

</style>