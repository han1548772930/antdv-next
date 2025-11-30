<script setup lang="ts">
import { ref } from 'vue'

function onChange(value: number | null) {
  console.log('changed', value)
}

const value1 = ref(3)
const value2 = ref(3)
const value3 = ref(3)
</script>

<template>
  <a-space wrap>
    <a-input-number v-model:value="value1" size="large" :min="1" :max="100000" @change="onChange" />
    <a-input-number v-model:value="value2" :min="1" :max="100000" @change="onChange" />
    <a-input-number v-model:value="value3" size="small" :min="1" :max="100000" @change="onChange" />
  </a-space>
</template>
