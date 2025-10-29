<script setup lang="ts">
const headerStyle = `
  text-align: center;
  color: #fff;
  height: 64px;
  padding-inline: 48px;
  line-height: 64px;
  background-color: #4096ff;
`

const contentStyle = `
  text-align: center;
  min-height: 120px;
  line-height: 120px;
  color: #fff;
  background-color: #0958d9;
`

const siderStyle = `
  text-align: center;
  line-height: 120px;
  color: #fff;
  background-color: #1677ff;
`

const footerStyle = `
  text-align: center;
  color: #fff;
  background-color: #4096ff;
`

const layoutStyle = `
  border-radius: 8px;
  overflow: hidden;
  width: calc(50% - 8px);
  max-width: calc(50% - 8px);
`
</script>

<template>
  <a-flex gap="middle" wrap>
    <a-layout :style="layoutStyle">
      <a-layout-header :style="headerStyle">
        Header
      </a-layout-header>
      <a-layout-content :style="contentStyle">
        Content
      </a-layout-content>
      <a-layout-footer :style="footerStyle">
        Footer
      </a-layout-footer>
    </a-layout>

    <a-layout :style="layoutStyle">
      <a-layout-header :style="headerStyle">
        Header
      </a-layout-header>
      <a-layout>
        <a-layout-sider width="25%" :style="siderStyle">
          Sider
        </a-layout-sider>
        <a-layout-content :style="contentStyle">
          Content
        </a-layout-content>
      </a-layout>
      <a-layout-footer :style="footerStyle">
        Footer
      </a-layout-footer>
    </a-layout>

    <a-layout :style="layoutStyle">
      <a-layout-header :style="headerStyle">
        Header
      </a-layout-header>
      <a-layout>
        <a-layout-content :style="contentStyle">
          Content
        </a-layout-content>
        <a-layout-sider width="25%" :style="siderStyle">
          Sider
        </a-layout-sider>
      </a-layout>
      <a-layout-footer :style="footerStyle">
        Footer
      </a-layout-footer>
    </a-layout>

    <a-layout :style="layoutStyle">
      <a-layout-sider width="25%" :style="siderStyle">
        Sider
      </a-layout-sider>
      <a-layout>
        <a-layout-header :style="headerStyle">
          Header
        </a-layout-header>
        <a-layout-content :style="contentStyle">
          Content
        </a-layout-content>
        <a-layout-footer :style="footerStyle">
          Footer
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-flex>
</template>
