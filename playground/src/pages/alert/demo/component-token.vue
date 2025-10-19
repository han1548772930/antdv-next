<script setup lang="ts">
import { SmileOutlined } from '@antdv-next/icons'
</script>

<template>
  <a-config-provider
    :theme="{
      components: {
        Alert: {
          withDescriptionIconSize: 32,
          withDescriptionPadding: 16,
        },
      },
    }"
  >
    <a-alert
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      show-icon
    >
      <template #icon>
        <SmileOutlined />
      </template>
    </a-alert>
  </a-config-provider>
</template>

<style scoped>

</style>
