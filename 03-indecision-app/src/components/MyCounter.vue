<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
  </section>

  <div>
    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const counter = ref(2);
const squareCounter = computed(() => counter.value * counter.value);
</script>
