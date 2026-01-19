<script setup lang="ts">
import {
  CustomerServiceOutlined,
  QuestionCircleOutlined,
  SyncOutlined,
} from '@antdv-next/icons'
import { Card, DatePicker, FloatButton, Masonry, Splitter, SplitterPanel, Tour } from 'antdv-next'
import dayjs from 'dayjs'
import { storeToRefs } from 'pinia'
import { computed, h } from 'vue'
import { useAppStore } from '@/stores/app.ts'
import ComponentItem from './component-item.vue'

const { _InternalPanelDoNotUseOrYouWillBeFired: DatePickerPanel } = DatePicker as any
const { _InternalPanelDoNotUseOrYouWillBeFired: TourPanel } = Tour as any
const { _InternalPanelDoNotUseOrYouWillBeFired: FloatButtonPanel } = FloatButton as any

const locales = {
  'zh-CN': {
    yesterday: '昨天',
    lastWeek: '上周',
    lastMonth: '上月',
    lastYear: '去年',
    new: '新增',
    update: '更新',
    sampleContent: 'Antdv Next 使用 CSS-in-JS 技术以提供动态与混合主题的能力。与此同时，我们使用组件级别的 CSS-in-JS 解决方案，让你的应用获得更好的性能。',
    inProgress: '进行中',
    success: '成功',
    taskFailed: '任务失败',
    tour: '漫游导览帮助用户对新加的功能进行快速了解',
  },
  'en-US': {
    yesterday: 'Yesterday',
    lastWeek: 'Last Week',
    lastMonth: 'Last Month',
    lastYear: 'Last Year',
    new: 'New',
    update: 'Update',
    sampleContent: 'Antdv Next use CSS-in-JS technology to provide dynamic & mix theme ability. And which use component level CSS-in-JS solution get your application a better performance.',
    inProgress: 'In Progress',
    success: 'Success',
    taskFailed: 'Task Failed',
    tour: 'A quick guide for new come user about how to use app.',
  },
}

const appStore = useAppStore()
const { locale, darkMode } = storeToRefs(appStore)

const currentLocale = computed(() => locales[locale.value])

const datePickerPresets = computed(() => [
  { label: currentLocale.value.yesterday, value: dayjs().add(-1, 'd') },
  { label: currentLocale.value.lastWeek, value: dayjs().add(-7, 'd') },
  { label: currentLocale.value.lastMonth, value: dayjs().add(-1, 'month') },
  { label: currentLocale.value.lastYear, value: dayjs().add(-1, 'year') },
])

const floatButtonItems = computed(() => [
  { icon: () => h(QuestionCircleOutlined) },
  { icon: () => h(CustomerServiceOutlined) },
  { icon: () => h(SyncOutlined) },
])

const masonryItems = [
  { key: '1', data: 80 },
  { key: '2', data: 60 },
  { key: '3', data: 40 },
  { key: '4', data: 120 },
  { key: '5', data: 90 },
  { key: '6', data: 40 },
  { key: '7', data: 60 },
  { key: '8', data: 70 },
  { key: '9', data: 120 },
]

const splitterBackground = computed(() => darkMode.value ? '#1f1f1f' : '#ffffff')
</script>

<template>
  <a-flex justify="center" class="antdv-components-list">
    <a-flex align="stretch" gap="large">
      <!-- DatePicker -->
      <ComponentItem title="DatePicker" type="new" :index="0">
        <DatePickerPanel
          :value="dayjs('2025-11-22 00:00:00')"
          :show-today="false"
          :presets="datePickerPresets"
        />
      </ComponentItem>

      <!-- Tour -->
      <ComponentItem title="Tour" type="new" :index="1">
        <TourPanel
          title="Antdv Next"
          :description="currentLocale.tour"
          :style="{ width: '350px' }"
          :current="3"
          :total="9"
        />
      </ComponentItem>

      <!-- FloatButton -->
      <ComponentItem title="FloatButton" type="new" :index="2">
        <a-flex align="center" gap="large">
          <FloatButtonPanel
            shape="square"
            :items="floatButtonItems"
          />
          <FloatButtonPanel back-top />
          <FloatButtonPanel
            :items="floatButtonItems"
          />
        </a-flex>
      </ComponentItem>

      <!-- Splitter -->
      <ComponentItem title="Splitter" type="new" :index="3">
        <Splitter
          orientation="vertical"
          :style="{
            height: '320px',
            width: '200px',
            background: splitterBackground,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }"
        >
          <SplitterPanel default-size="40%" min="20%" max="70%">
            <a-flex justify="center" align="center" style="height: 100%;">
              <a-typography-title type="secondary" :level="5" style="white-space: nowrap;">
                First
              </a-typography-title>
            </a-flex>
          </SplitterPanel>

          <SplitterPanel>
            <a-flex justify="center" align="center" style="height: 100%;">
              <a-typography-title type="secondary" :level="5" style="white-space: nowrap;">
                Second
              </a-typography-title>
            </a-flex>
          </SplitterPanel>
        </Splitter>
      </ComponentItem>

      <!-- Masonry -->
      <ComponentItem title="Masonry" type="new" :index="4">
        <Masonry
          :columns="2"
          :gutter="8"
          :style="{ width: '300px', height: '320px' }"
          :items="masonryItems"
        >
          <template #itemRender="{ data, index }">
            <Card size="small" :style="{ height: `${data}px` }">
              {{ index + 1 }}
            </Card>
          </template>
        </Masonry>
      </ComponentItem>
    </a-flex>
  </a-flex>
</template>

<style>
.antdv-components-list {
  width: 100%;
  overflow: hidden;
}
</style>
