<script setup lang="ts">
import { shallowRef } from 'vue'

const color = shallowRef()
</script>

<template>
  <a-color-picker v-model:value="color" default-value="#1677ff" />
</template>
