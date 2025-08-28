# Radio Group

The `RadioGroup` component allows users to select a single option from a list of mutually exclusive choices. It is built on top of Radix UI's RadioGroup primitive, providing accessible and customizable radio button functionality.

## Installation

```bash
# No specific installation needed for individual components, as they are part of the UI library.
# Ensure you have `@radix-ui/react-radio-group` and `lucide-react` installed in your project.
npm install @radix-ui/react-radio-group lucide-react
# or
yarn add @radix-ui/react-radio-group lucide-react
```

## Usage

```tsx
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  );
}
```

## Components and Props

The `RadioGroup` component is composed of two sub-components, each extending props from their corresponding Radix UI primitive.

### `RadioGroup`

The root component for the radio group. It manages the selected value.

| Prop Name | Type | Description |
|---|---|---|
| `value` | `string` | The controlled value of the radio group. |
| `defaultValue` | `string` | The default value of the radio group when it is initially rendered. |
| `onValueChange` | `(value: string) => void` | Event handler called when the value of the radio group changes. |
| `disabled` | `boolean` | If `true`, all radio items in the group will be disabled. |
| `orientation` | `"horizontal"` \| `"vertical"` | The orientation of the radio group. |
| `...props` | `React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>` | Standard props for Radix UI RadioGroup Root. Refer to [Radix UI RadioGroup documentation](https://www.radix-ui.com/docs/primitives/components/radio-group#root) for a full list. |

### `RadioGroupItem`

An individual radio button within the group.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the radio item. |
| `value` | `string` | The value associated with the radio item. |
| `disabled` | `boolean` | If `true`, the radio item will be disabled. |
| `...props` | `React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>` | Standard props for Radix UI RadioGroup Item. |

## Examples

### Basic Radio Group

```tsx
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import * as React from "react";

function BasicRadioGroupExample() {
  const [selectedValue, setSelectedValue] = React.useState("option-one");

  return (
    <RadioGroup value={selectedValue} onValueChange={setSelectedValue}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  );
}
```

### Disabled Radio Group Item

```tsx
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

function DisabledRadioItemExample() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="disabled-one" />
        <Label htmlFor="disabled-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="disabled-two" disabled />
        <Label htmlFor="disabled-two">Option Two (Disabled)</Label>
      </div>
    </RadioGroup>
  );
}
```