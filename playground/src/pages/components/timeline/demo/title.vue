<docs lang="zh-CN">
使用 `title` 标签单独展示时间。
</docs>

<docs lang="en-US">
Use `title` show time alone.
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const mode = ref<'start' | 'alternate' | 'end'>('start')

const items = [
  {
    label: '2015-09-01',
    children: 'Create a services',
  },
  {
    label: '2015-09-01 09:12:11',
    children: 'Solve initial network problems',
  },
  {
    children: 'Technical testing',
  },
  {
    label: '2015-09-01 09:12:11',
    children: 'Network problems being solved',
  },
]
</script>

<template>
  <div>
    <a-radio-group v-model:value="mode" :style="{ marginBottom: '20px' }">
      <a-radio value="start">Start</a-radio>
      <a-radio value="end">End</a-radio>
      <a-radio value="alternate">Alternate</a-radio>
    </a-radio-group>
    <a-timeline :mode="mode === 'end' ? 'right' : mode" :items="items" />
  </div>
</template>
