<docs lang="zh-CN">
时间轴点可以在另一侧。
</docs>

<docs lang="en-US">
End alternate timeline.
</docs>

<script setup lang="ts">
import { ClockCircleOutlined } from '@antdv-next/icons'
import { h } from 'vue'

const items = [
  {
    children: 'Create a services site 2015-09-01',
  },
  {
    children: 'Solve initial network problems 2015-09-01',
  },
  {
    dot: () => h(ClockCircleOutlined),
    color: 'red',
    children: 'Technical testing 2015-09-01',
  },
  {
    children: 'Network problems being solved 2015-09-01',
  },
]
</script>

<template>
  <a-timeline mode="right" :items="items" />
</template>
