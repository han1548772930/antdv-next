import type { SlotsType } from 'vue'
import type { EmptyEmit } from '../_util/type.ts'
import type { DescriptionsContextProps } from './DescriptionsContext.ts'
import type { InternalDescriptionsItemType } from './index.tsx'
import { defineComponent } from 'vue'
import Cell from './Cell.tsx'
import { useDescriptionsCtx } from './DescriptionsContext.ts'

interface CellConfig {
  component: string | [string, string]
  type: 'label' | 'content' | 'item'
  showLabel?: boolean
  showContent?: boolean
}
function renderCells(
  items: InternalDescriptionsItemType[],
  { colon, prefixCls, bordered }: RowProps,
  {
    component,
    type,
    showLabel,
    showContent,
    styles: rootStyles,
  }: CellConfig & DescriptionsContextProps,
) {
  return items.map((item, index) => {
    const {
      label,
      children,
      prefixCls: itemPrefixCls = prefixCls,
      span = 1,
      key,
      styles,
      style,
    } = item
    const className = item.class

    if (typeof component === 'string') {
      return (
        <Cell
          key={`${type}-${key || index}`}
          class={className}
          style={style}
          styles={{
            label: {
              ...rootStyles?.label,
              ...styles?.label,
            },
            content: {
              ...rootStyles?.content,
              ...styles?.content,
            },
          }}
          span={span}
          colon={colon}
          component={component}
          itemPrefixCls={itemPrefixCls}
          bordered={bordered}
          label={showLabel ? label : null}
          content={showContent ? children : null}
          type={type}
        />
      )
    }

    return [
      <Cell
        key={`label-${key || index}`}
        class={className}
        style={{
          ...rootStyles?.label,
          ...style,
          ...styles?.label,
        }}
        span={1}
        colon={colon}
        component={component[0]}
        itemPrefixCls={itemPrefixCls}
        bordered={bordered}
        label={label}
        type="label"
      />,
      <Cell
        key={`content-${key || index}`}
        class={className}
        style={{
          ...rootStyles?.content,
          ...style,
          ...styles?.content,
        }}
        span={span * 2 - 1}
        component={component[1]}
        itemPrefixCls={itemPrefixCls}
        bordered={bordered}
        content={children}
        type="content"
      />,
    ]
  })
}

export interface RowProps {
  prefixCls: string
  vertical: boolean
  row: InternalDescriptionsItemType[]
  bordered?: boolean
  colon: boolean
  index: number
}

export interface RowSlots {
  default?: () => any
}
const Row = defineComponent<
  RowProps,
  EmptyEmit,
  string,
  SlotsType<RowSlots>
>(
  (props) => {
    const descContext = useDescriptionsCtx()
    return () => {
      const { prefixCls, vertical, row, index, bordered } = props

      if (vertical) {
        return (
          <>
            <tr key={`label-${index}`} class={`${prefixCls}-row`}>
              {renderCells(
                row,
                props,
                {
                  component: 'th',
                  type: 'label',
                  showLabel: true,
                  ...descContext,
                },
              )}
            </tr>
            <tr key={`content-${index}`} class={`${prefixCls}-row`}>
              {renderCells(
                row,
                props,
                {
                  component: 'td',
                  type: 'content',
                  showContent: true,
                  ...descContext,
                },
              )}
            </tr>
          </>
        )
      }

      return (
        <tr key={index} class={`${prefixCls}-row`}>
          {renderCells(
            row,
            props,
            {
              component: bordered ? ['th', 'td'] : 'td',
              type: 'item',
              showLabel: true,
              showContent: true,
              ...descContext,
            },
          )}
        </tr>
      )
    }
  },
)

export default Row
