# ToggleGroup

The `ToggleGroup` component is a container for a set of `ToggleGroupItem` components, allowing them to function as a single logical group. This is useful for creating segmented controls or radio-like button groups.

## Usage

```tsx
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Italic, Underline, Bold } from "lucide-react";

function ToggleGroupDemo() {
  return (
    <ToggleGroup type="multiple" defaultValue={["bold"]}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

function ToggleGroupSingleDemo() {
  return (
    <ToggleGroup type="single" defaultValue="center" className="flex">
      <ToggleGroupItem value="left" aria-label="Align left">
        Left
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        Center
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        Right
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

function ToggleGroupVariantsAndSizesDemo() {
  return (
    <div className="flex flex-col space-y-4">
      <ToggleGroup type="single" variant="outline" size="sm">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" variant="default" size="lg">
        <ToggleGroupItem value="c">C</ToggleGroupItem>
        <ToggleGroupItem value="d">D</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
```

## Components and Props

### `ToggleGroup`

| Prop Name | Type | Description | Default |
|---|---|---|---|
| `type` | `"single"` \| `"multiple"` | Determines if only one item can be selected (`"single"`) or multiple (`"multiple"`). | |
| `defaultValue` | `string` \| `string[]` | The value(s) of the initially selected item(s). | |
| `variant` | `"default"` \| `"outline"` | The visual style of the toggle group items. Inherited from `Toggle` component. | `"default"` |
| `size` | `"default"` \| `"sm"` \| `"lg"` | The size of the toggle group items. Inherited from `Toggle` component. | `"default"` |
| `className` | `string` | Additional CSS classes to apply to the toggle group container. | `""` |
| `children` | `React.ReactNode` | The `ToggleGroupItem` components to be rendered within the group. | |
| `...props` | `React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>` | Standard props for Radix UI's Toggle Group Root component. | |

### `ToggleGroupItem`

| Prop Name | Type | Description | Default |
|---|---|---|---|
| `value` | `string` | The unique value associated with the toggle item. | |
| `className` | `string` | Additional CSS classes to apply to the toggle group item. | `""` |
| `children` | `React.ReactNode` | The content of the toggle group item. | |
| `...props` | `React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>` | Standard props for Radix UI's Toggle Group Item component. | |
