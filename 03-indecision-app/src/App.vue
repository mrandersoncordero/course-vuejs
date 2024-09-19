<template>
  <h1 class="text-3xl font-bold underline">Hola, mundo!</h1>
  <hr />

  <MyCounter />
  <MyCounterScript :value="2" />
  <MyCounterScript2 :value="3" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>
