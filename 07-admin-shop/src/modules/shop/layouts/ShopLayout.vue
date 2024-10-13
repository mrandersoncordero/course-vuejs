<template>
  <!--Header navbar -->
  <top-menu />

  <!-- Router View -->
  <RouterView />

  <!-- Footer -->
  <custom-footer />
</template>

<script setup lang="ts">
import CustomFooter from '../components/CustomFooter.vue';
import TopMenu from '../components/TopMenu.vue';
</script>
