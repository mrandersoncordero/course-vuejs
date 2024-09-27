<template>
  <nav>
    <a href="#/">Home</a>
    <a href="#/features">Features</a>
    <a href="#/pricing">Pricing</a>
    <a href="#/contact">Contact</a>
  </nav>
  <main class="bg-gray-100">
    <RouterView />
  </main>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import HomePage from './modules/landing/pages/HomePage.vue';
</script>
