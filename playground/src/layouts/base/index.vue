<script setup lang="ts">
import Header from '@/layouts/base/header.vue'
</script>

<template>
  <a-config-provider>
    <a-app class="w-full">
      <Header />
      <slot />
    </a-app>
  </a-config-provider>
</template>
