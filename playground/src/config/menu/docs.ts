import type { AntdvMenuItem } from './interface'
import { components } from './components'

export const docsMenuLocales = {
  '/docs/vue/introduce': {
    'zh-CN': 'Ant Design of Vue',
    'en-US': 'Ant Design of Vue',
  },
  '/blog/antdv-next-release': {
    'zh-CN': 'Antdv Next Release v1',
    'en-US': 'Antdv Next v1 发布啦！',
  },
}

export const docsMenus: Record<string, AntdvMenuItem[]> = {
  '/docs/vue': [
    {
      key: '/docs/vue/introduce',
      label: '介绍',
    },
  ],
  '/components': components,
  '/blog': [
    {
      key: '/blog/antdv-next-release',
      label: 'Antdv Next Release v1',
    },
  ],
}
