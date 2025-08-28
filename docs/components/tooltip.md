# Tooltip

The `Tooltip` component displays a small, informative popover when a user hovers over or focuses on an element. It is built on top of Radix UI's Tooltip primitive, providing accessible and customizable tooltip functionality.

## Installation

```bash
# No specific installation needed for individual components, as they are part of the UI library.
# Ensure you have `@radix-ui/react-tooltip` installed in your project.
npm install @radix-ui/react-tooltip
# or
yarn add @radix-ui/react-tooltip
```

## Usage

To use the tooltip system, you need to wrap your application (or a part of it where you want tooltips to be available) with `TooltipProvider`.

```tsx
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
```

## Components and Props

The `Tooltip` component is composed of several sub-components, each extending props from their corresponding Radix UI primitive.

### `TooltipProvider`

The context provider for the tooltip system. It should wrap the part of your application where you want to use tooltips.

| Prop Name | Type | Description |
|---|---|---|
| `children` | `React.ReactNode` | The child components to be rendered within the provider's context. |
| `delayDuration` | `number` | The duration from when the pointer enters the trigger until the tooltip opens. | `700` (default from Radix UI) |
| `skipDelayDuration` | `number` | The duration from when the pointer leaves the trigger until the tooltip closes. | `300` (default from Radix UI) |
| `disableHoverableContent` | `boolean` | When `true`, the tooltip content will not be hoverable. | `false` (default from Radix UI) |

### `Tooltip`

The root component for the tooltip. It manages the open/closed state.

| Prop Name | Type | Description |
|---|---|---|
| `open` | `boolean` | The controlled open state of the tooltip. |
| `defaultOpen` | `boolean` | The open state of the tooltip when it is initially rendered. |
| `onOpenChange` | `(open: boolean) => void` | Event handler called when the open state of the tooltip changes. |

### `TooltipTrigger`

The element that triggers the tooltip to open.

| Prop Name | Type | Description |
|---|---|---|
| `asChild` | `boolean` | If `true`, the trigger will render its child component instead of a `<div>` element, passing its props to the child. |
| `...props` | `React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>` | Standard props for Radix UI Tooltip Trigger. |

### `TooltipContent`

The content area of the tooltip.

| Prop Name | Type | Description | Default |
|---|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the content container. | `""` |
| `sideOffset` | `number` | The distance in pixels from the trigger to the content. | `4` |
| `side` | `"top"` \| `"right"` \| `"bottom"` \| `"left"` | The preferred side of the trigger to render the tooltip content. | `"top"` (default from Radix UI) |
| `align` | `"start"` \| `"center"` \| `"end"` | The preferred alignment of the tooltip content against the trigger. | `"center"` (default from Radix UI) |
| `...props` | `React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>` | Standard props for Radix UI Tooltip Content. |

## Examples

### Basic Tooltip

```tsx
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function BasicTooltipExample() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover over me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a basic tooltip.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
```

### Tooltip with Custom Side

```tsx
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function CustomSideTooltipExample() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover (Bottom)</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>This tooltip appears at the bottom.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
```