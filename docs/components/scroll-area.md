# Scroll Area

The `ScrollArea` component provides a customizable scrollable container that can be used to display content that overflows its bounds. It is built on top of Radix UI's ScrollArea primitive, offering accessible and customizable scrollbar functionality.

## Installation

```bash
# No specific installation needed for individual components, as they are part of the UI library.
# Ensure you have `@radix-ui/react-scroll-area` installed in your project.
npm install @radix-ui/react-scroll-area
# or
yarn add @radix-ui/react-scroll-area
```

## Usage

```tsx
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag} className="text-sm">
            {tag}
          </div>
        ))}
      </div>
      <ScrollBar />
    </ScrollArea>
  );
}
```

## Components and Props

The `ScrollArea` component is composed of two sub-components, each extending props from their corresponding Radix UI primitive.

### `ScrollArea`

The root component for the scrollable area.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the scroll area container. |
| `children` | `React.ReactNode` | The content to be rendered inside the scroll area. |
| `...props` | `React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>` | Standard props for Radix UI ScrollArea Root. Refer to [Radix UI ScrollArea documentation](https://www.radix-ui.com/docs/primitives/components/scroll-area#root) for a full list. |

### `ScrollBar`

The scrollbar component. It should be placed inside `ScrollArea`.

| Prop Name | Type | Description | Default |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the scrollbar. | `""` |
| `orientation` | `"vertical"` \| `"horizontal"` | The orientation of the scrollbar. | `"vertical"` |
| `...props` | `React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>` | Standard props for Radix UI ScrollArea Scrollbar. |

## Examples

### Vertical Scroll Area

```tsx
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const longContent = Array.from({ length: 30 }).map(
  (_, i) => `Item ${i + 1}: This is a long line of text to demonstrate vertical scrolling.`
);

function VerticalScrollAreaExample() {
  return (
    <ScrollArea className="h-48 w-64 rounded-md border p-4">
      {longContent.map((item, index) => (
        <p key={index} className="mb-2">
          {item}
        </p>
      ))}
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
```

### Horizontal Scroll Area

```tsx
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const horizontalContent = "This is a very long line of text that will require horizontal scrolling to be fully visible. It demonstrates how the horizontal scrollbar works within the ScrollArea component. You can add more text here to make it even longer and test the scrolling functionality further. ".repeat(5);

function HorizontalScrollAreaExample() {
  return (
    <ScrollArea className="w-64 whitespace-nowrap rounded-md border p-4">
      <p>{horizontalContent}</p>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
```