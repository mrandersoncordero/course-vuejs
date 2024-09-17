<template>
  <h1>Mi primera app</h1>
  <hr />

  <MyCounterScript :value="10" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
</script>
