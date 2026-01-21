<docs lang="zh-CN">
通过 `variant` 设置时间轴的样式。
</docs>

<docs lang="en-US">
Use the `variant` to set the style of the timeline.
</docs>

<script setup lang="ts">
const items = [
  {
    children: 'Create a services site 2015-09-01',
  },
  {
    children: 'Solve initial network problems 2015-09-01',
  },
  {
    children: 'Technical testing 2015-09-01',
  },
  {
    children: 'Network problems being solved 2015-09-01',
  },
]
</script>

<template>
  <a-timeline variant="filled" :items="items" />
</template>
