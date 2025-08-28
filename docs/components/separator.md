# Separator

The `Separator` component is a visually and semantically meaningful divider that can be used to separate content. It is built on top of Radix UI's Separator primitive, providing accessible and customizable separators.

## Installation

```bash
# No specific installation needed for individual components, as they are part of the UI library.
# Ensure you have `@radix-ui/react-separator` installed in your project.
npm install @radix-ui/react-separator
# or
yarn add @radix-ui/react-separator
```

## Usage

```tsx
import { Separator } from "@/components/ui/separator";

function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}
```

## Props

The `Separator` component extends all props from `SeparatorPrimitive.Root` from `@radix-ui/react-separator`. Additionally, it accepts the following props:

| Prop Name | Type | Description | Default |
|---|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the separator element. | `""` |
| `orientation` | `"horizontal"` \| `"vertical"` | The orientation of the separator. | `"horizontal"` |
| `decorative` | `boolean` | When `true`, the separator is purely decorative and will be ignored by assistive technologies. | `true` |
| `...props` | `React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>` | Standard props for Radix UI Separator Root. Refer to [Radix UI Separator documentation](https://www.radix-ui.com/docs/primitives/components/separator#root) for a full list. |

## Examples

### Horizontal Separator

```tsx
import { Separator } from "@/components/ui/separator";

function HorizontalSeparatorExample() {
  return (
    <div>
      <p>Content above the separator.</p>
      <Separator className="my-4" />
      <p>Content below the separator.</p>
    </div>
  );
}
```

### Vertical Separator

```tsx
import { Separator } from "@/components/ui/separator";

function VerticalSeparatorExample() {
  return (
    <div className="flex h-10 items-center space-x-4">
      <span>Item 1</span>
      <Separator orientation="vertical" />
      <span>Item 2</span>
      <Separator orientation="vertical" />
      <span>Item 3</span>
    </div>
  );
}
```