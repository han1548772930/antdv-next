import type { Ref } from 'vue'
import type { ScreenMap } from '../../_util/responsiveObserver.ts'
import type { DescriptionsItemType } from '../index.tsx'
import { computed } from 'vue'
import { matchScreen } from '../../_util/responsiveObserver.ts'

export default function useItems(screens: Ref<ScreenMap>, items: Ref<DescriptionsItemType[]>) {
  const mergedItems = computed(() => items.value)

  return computed(() => {
    return mergedItems.value.map(({ span, ...restItem }) => {
      if (span === 'filled') {
        return { ...restItem, filled: true }
      }
      return {
        ...restItem,
        span: typeof span === 'number' ? span : matchScreen(screens.value, span),
      }
    })
  })
}
