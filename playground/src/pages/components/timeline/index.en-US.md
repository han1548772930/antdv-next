---
category: Components
group: Data Display
title: Timeline
description: Vertical display timeline.
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*FkTySqNt3sYAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*yIl9S4hAIBcAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

<DocHeading></DocHeading>

## When To Use {#when-to-use}

- When a series of information needs to be ordered by time, users can visually see what happened at what time.
- You are reading this documentation.

## Examples {#examples}

<demo-group>
<demo src="./demo/basic.vue">Basic</demo>
<demo src="./demo/alternate.vue">Alternate</demo>
<demo src="./demo/custom.vue">Custom</demo>
<demo src="./demo/pending.vue">Pending</demo>
<demo src="./demo/title.vue">Label</demo>
<demo src="./demo/variant.vue">Variant</demo>
<demo src="./demo/end.vue">Right Alternate</demo>
<demo src="./demo/horizontal.vue">Horizontal</demo>
</demo-group>

## API

### Property {#property}

Common props ref：[Common props](/docs/vue/common-props)

#### Timeline

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| pending | Set the last ghost node's existence or its content. Use `item.loading` instead | VueNode | false | - |
| pendingDot | Set the dot of the last ghost node when pending is true. Use `item.icon` instead | VueNode | &lt;LoadingOutlined /&gt; | - |
| reverse | Whether reverse nodes or not | boolean | false | - |
| mode | By sending `alternate` the timeline will distribute the nodes to the left and right | 'left' \| 'alternate' \| 'right' | `start` | - |
| items | Each node of timeline | TimelineItemProps[] | - | - |
| dotRender | - | (params: &#123; item: TimelineItemProps, index: number &#125;) =&gt; void | - | - |
| labelRender | - | (params: &#123; item: TimelineItemProps, index: number &#125;) =&gt; void | - | - |
| contentRender | - | (params: &#123; item: TimelineItemProps, index: number &#125;) =&gt; void | - | - |

#### TimelineItem

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| key | - | Key | - | - |
| prefixCls | - | string | - | - |
| class | - | string | - | - |
| color | - | LiteralUnion&lt;Color&gt; | - | - |
| dot | - | VueNode | - | - |
| pending | Set the last ghost node's existence or its content. Use `item.loading` instead | boolean | false | - |
| position | - | string | - | - |
| style | - | CSSProperties | - | - |
| label | - | VueNode | - | - |
| children | - | VueNode | - | - |

### Slots {#slots}

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| pending | Set the last ghost node's existence or its content. Use `item.loading` instead | () =&gt; void | - |
| pendingDot | Set the dot of the last ghost node when pending is true. Use `item.icon` instead | () =&gt; void | - |
| dotRender | - | (params: &#123; item: TimelineItemProps, index: number &#125;) =&gt; void | - |
| labelRender | - | (params: &#123; item: TimelineItemProps, index: number &#125;) =&gt; void | - |
| contentRender | - | (params: &#123; item: TimelineItemProps, index: number &#125;) =&gt; void | - |
