import type { CSSProperties, InjectionKey, Ref } from 'vue'
import { inject, provide, ref } from 'vue'

export type SemanticName = 'label' | 'content'

export interface DescriptionsContextProps {
  styles?: Partial<Record<SemanticName, CSSProperties>>
  classes?: Partial<Record<SemanticName, string>>
}

const DescriptionsContext: InjectionKey<Ref<DescriptionsContextProps>> = Symbol('DescriptionsContext')
export function useDescriptionsProvider(props: Ref<DescriptionsContextProps>) {
  provide(DescriptionsContext, props)
}

export function useDescriptionsCtx() {
  return inject(DescriptionsContext, ref<DescriptionsContextProps>({}))
}
