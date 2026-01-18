import { defineStore } from 'pinia'
import { compactModeStore, darkModeStore, localeStore } from '@/composables/local-store'
import { menusMap } from '@/config/menu'

export interface AppState {
  headerKey: string[]
  siderKey: string[]
  siderOpenKeys: string[]
  locale: 'zh-CN' | 'en-US'
  darkMode: boolean
  compactMode: boolean
}

export const useAppStore = defineStore('app', {
  state: (): AppState => {
    return {
      headerKey: [],
      siderKey: [],
      siderOpenKeys: [],
      locale: localeStore.value,
      darkMode: darkModeStore.value ?? false,
      compactMode: compactModeStore.value ?? false,
    }
  },
  actions: {
    setHeaderKey(keys: string[]) {
      this.headerKey = keys
    },
    setSiderKey(keys: string[]) {
      this.siderKey = keys
    },
    setSiderOpenKeys(keys: string[]) {
      this.siderOpenKeys = keys
    },
    setLocale(locale: AppState['locale']) {
      this.locale = locale
      localeStore.value = locale
    },
    toggleDarkMode(darkMode?: boolean) {
      this.darkMode = darkMode || !this.darkMode
      darkModeStore.value = this.darkMode
    },
    toggleCompactMode(compactMode?: boolean) {
      this.compactMode = compactMode || !this.compactMode
      compactModeStore.value = this.compactMode
    },
  },
  getters: {
    siderMenus(store) {
      const currentKey = store.headerKey[0]
      if (!currentKey) {
        return []
      }
      const currentMenus = menusMap[currentKey]
      if (currentMenus) {
        return currentMenus.menus
      }
      return []
    },

    siderLocales(store) {
      const currentKey = store.headerKey[0]
      if (!currentKey) {
        return {}
      }
      const currentMenus = menusMap[currentKey]
      if (currentMenus) {
        return currentMenus.locales
      }
      return {}
    },
  },
})
