<script setup lang="ts">
const menuItems = [
  {
    key: '1',
  },
  {
    key: '2',
  },
  {
    key: '3',
  },
]
const items = [
  {
    title: 'Ant Design',
  },
  {
    title: 'Component',
  },
  {
    title: 'General',
    menu: { items: menuItems },
  },
  {
    title: 'Button',
  },
]
</script>

<template>
  <a-breadcrumb :items="items">
    <template #titleRender="{ item, index }">
      <template v-if="index === 1 || index === 2">
        <a href=""> {{ item.title }}</a>
      </template>
    </template>
    <template #menuLabelRender="{ index, menu }">
      <template v-if="index === 2">
        <template v-if="menu.key === '1'">
          <a target="_blank" rel="noopener noreferrer" href="https://www.alipay.com/">
            General
          </a>
        </template>
        <template v-if="menu.key === '2'">
          <a target="_blank" rel="noopener noreferrer" href="https://www.taobao.com/">
            Layout
          </a>
        </template>
        <template v-if="menu.key === '3'">
          <a target="_blank" rel="noopener noreferrer" href="https://www.tmall.com/">
            Navigation
          </a>
        </template>
      </template>
    </template>
  </a-breadcrumb>
</template>
