import type { VueNode } from '../_util/type'
import type { TourStepProps } from './interface'
import { clsx } from '@v-c/util'
import { computed, defineComponent, isVNode } from 'vue'
import useClosable from '../_util/hooks/useClosable'
import { useComponentBaseConfig } from '../config-provider/context'
import { RawPurePanel as PopoverRawPurePanel } from '../popover/PurePanel'
import TourPanel from './panelRender'
import useStyle from './style'

export interface PurePanelProps extends TourStepProps {}

const defaults = {
  current: 0,
  total: 6,
} as any

/** @private Internal Component. Do not use in your production. */
const PurePanel = defineComponent<PurePanelProps>(
  (props = defaults, { attrs }) => {
    const { prefixCls } = useComponentBaseConfig('tour', props)
    const [hashId, cssVarCls] = useStyle(prefixCls)

    const closableCollection = computed(() => ({
      closable: props.closable as boolean | undefined,
      closeIcon: props.closeIcon as VueNode,
    }))

    const fallbackCloseCollection = computed(() => ({
      closable: true,
      closeIconRender: (icon: any) => {
        if (isVNode(icon)) {
          const iconClass = (icon.props as any)?.class
          return {
            ...icon,
            props: {
              ...icon.props,
              class: clsx(iconClass, `${prefixCls.value}-close-icon`),
            },
          }
        }
        return icon
      },
    }))

    const closableResult = useClosable(closableCollection, computed(() => null), fallbackCloseCollection)

    return () => {
      const {
        current = 0,
        total = 6,
        type,
        closable: _closable,
        closeIcon: _closeIcon,
        ...restProps
      } = props

      const [mergedClosable, mergedCloseIcon] = closableResult.value ?? [false, null]

      return (
        <PopoverRawPurePanel
          prefixCls={prefixCls.value}
          hashId={hashId.value}
          class={clsx((attrs as any).class, `${prefixCls.value}-pure`, type && `${prefixCls.value}-${type}`, cssVarCls.value, props.class)}
          style={[(attrs as any).style, props.style]}
        >
          <TourPanel
            stepProps={{
              ...restProps,
              prefixCls: prefixCls.value,
              total,
              closable: mergedClosable ? { closeIcon: mergedCloseIcon } : undefined,
            }}
            current={current}
            type={type}
          />
        </PopoverRawPurePanel>
      )
    }
  },
  {
    name: 'TourPurePanel',
    inheritAttrs: false,
  },
)

export default PurePanel
