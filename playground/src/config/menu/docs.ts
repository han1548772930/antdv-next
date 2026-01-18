import type { AntdvMenuItem } from './interface'

export const docsMenuLocales = {
  '/docs/vue/introduce': {
    'zh-CN': 'Ant Design of Vue',
    'en-US': 'Ant Design of Vue',
  },
}

export const docs: Record<string, AntdvMenuItem[]> = {
  '/docs/vue': [
    {
      key: '/docs/vue/introduce',
      label: '介绍',
    },
  ],
}
