# Select

The `Select` component provides a customizable and accessible select input. It is built on top of Radix UI's Select primitive, offering full control over content, styling, and behavior.

## Installation

```bash
# No specific installation needed for individual components, as they are part of the UI library.
# Ensure you have `@radix-ui/react-select` and `lucide-react` installed in your project.
npm install @radix-ui/react-select lucide-react
# or
yarn add @radix-ui/react-select lucide-react
```

## Usage

```tsx
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
```

## Components and Props

The `Select` component is composed of several sub-components, each extending props from their corresponding Radix UI primitive.

### `Select`

The root component for the select input. It manages the selected value.

| Prop Name | Type | Description |
|---|---|---|
| `value` | `string` | The controlled value of the select. |
| `defaultValue` | `string` | The default value of the select when it is initially rendered. |
| `onValueChange` | `(value: string) => void` | Event handler called when the value of the select changes. |
| `open` | `boolean` | The controlled open state of the select content. |
| `defaultOpen` | `boolean` | The open state of the select content when it is initially rendered. |
| `onOpenChange` | `(open: boolean) => void` | Event handler called when the open state of the select content changes. |
| `dir` | `"ltr"` \| `"rtl"` | The reading direction of the select. |
| `name` | `string` | The name of the select input. Useful for form submissions. |
| `disabled` | `boolean` | If `true`, the select will be disabled. |
| `required` | `boolean` | If `true`, the select will be required. |

### `SelectGroup`

A logical grouping of `SelectItem` components.

| Prop Name | Type | Description |
|---|---|---|
| `...props` | `React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>` | Standard props for Radix UI Select Group. |

### `SelectValue`

Displays the currently selected value of the `Select`.

| Prop Name | Type | Description |
|---|---|---|
| `placeholder` | `string` | The placeholder text to display when no value is selected. |
| `...props` | `React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>` | Standard props for Radix UI Select Value. |

### `SelectTrigger`

The interactive element that opens the `SelectContent`.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the trigger. |
| `...props` | `React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>` | Standard props for Radix UI Select Trigger. |

### `SelectContent`

The container for the select options.

| Prop Name | Type | Description | Default |
|---|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the content container. | `""` |
| `position` | `"popper"` \| `"item-aligned"` | The positioning strategy of the content. | `"popper"` |
| `sideOffset` | `number` | The distance in pixels from the trigger to the content. | `4` |
| `...props` | `React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>` | Standard props for Radix UI Select Content. |

### `SelectLabel`

A non-interactive label within a `SelectGroup`.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the label. |
| `...props` | `React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>` | Standard props for Radix UI Select Label. |

### `SelectItem`

An individual selectable option within the `SelectContent`.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the item. |
| `value` | `string` | The value associated with the select item. |
| `disabled` | `boolean` | If `true`, the select item will be disabled. |
| `textValue` | `string` | The text value of the item, used for accessibility and search. |
| `...props` | `React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>` | Standard props for Radix UI Select Item. |

### `SelectSeparator`

A visual separator between `SelectItem` components.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the separator. |
| `...props` | `React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>` | Standard props for Radix UI Select Separator. |

## Examples

### Basic Select

```tsx
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function BasicSelectExample() {
  const [framework, setFramework] = React.useState("");

  return (
    <Select value={framework} onValueChange={setFramework}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="nextjs">Next.js</SelectItem>
        <SelectItem value="sveltekit">SvelteKit</SelectItem>
        <SelectItem value="astro">Astro</SelectItem>
        <SelectItem value="nuxt">Nuxt.js</SelectItem>
      </SelectContent>
    </Select>
  );
}
```

### Select with Groups and Labels

```tsx
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectWithGroupsExample() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
```