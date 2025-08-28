# Popover

The `Popover` component is a transient pop-up that displays content in a small overlay, typically triggered by clicking an element. It is built on top of Radix UI's Popover primitive, providing accessible and customizable popover functionality.

## Installation

```bash
# No specific installation needed for individual components, as they are part of the UI library.
# Ensure you have `@radix-ui/react-popover` installed in your project.
npm install @radix-ui/react-popover
# or
yarn add @radix-ui/react-popover
```

## Usage

```tsx
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
```

## Components and Props

The `Popover` component is composed of several sub-components, each extending props from their corresponding Radix UI primitive.

### `Popover`

The root component for the popover. It manages the open/closed state.

| Prop Name | Type | Description |
|---|---|---|
| `open` | `boolean` | The controlled open state of the popover. |
| `defaultOpen` | `boolean` | The open state of the popover when it is initially rendered. |
| `onOpenChange` | `(open: boolean) => void` | Event handler called when the open state of the popover changes. |

### `PopoverTrigger`

The element that opens the popover when clicked.

| Prop Name | Type | Description |
|---|---|---|
| `asChild` | `boolean` | If `true`, the trigger will render its child component instead of a `<button>` element, passing its props to the child. |
| `...props` | `React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>` | Standard props for Radix UI Popover Trigger. |

### `PopoverContent`

The content area of the popover.

| Prop Name | Type | Description | Default |
|---|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the content container. | `""` |
| `align` | `"start"` \| `"center"` \| `"end"` | The preferred alignment of the popover content. | `"center"` |
| `sideOffset` | `number` | The distance in pixels from the trigger to the content. | `4` |
| `...props` | `React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>` | Standard props for Radix UI Popover Content. |

## Examples

### Basic Popover

```tsx
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

function BasicPopoverExample() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Click for Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4">
        <p>This is the content of the popover.</p>
      </PopoverContent>
    </Popover>
  );
}
```

### Popover with Custom Alignment

```tsx
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

function AlignedPopoverExample() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Popover (Align End)</Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-auto p-4">
        <p>This popover is aligned to the end of the trigger.</p>
      </PopoverContent>
    </Popover>
  );
}
```