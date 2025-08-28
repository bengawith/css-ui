# Slider

The `Slider` component allows users to select a value or a range of values along a track. It is built on top of Radix UI's Slider primitive, providing accessible and customizable slider functionality.

## Installation

```bash
# No specific installation needed for individual components, as they are part of the UI library.
# Ensure you have `@radix-ui/react-slider` installed in your project.
npm install @radix-ui/react-slider
# or
yarn add @radix-ui/react-slider
```

## Usage

```tsx
import { Slider } from "@/components/ui/slider";
import * as React from "react";

function SliderDemo() {
  const [value, setValue] = React.useState([50]);

  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      onValueChange={setValue}
      className="w-[60%]"
    />
  );
}
```

## Props

The `Slider` component extends all props from `SliderPrimitive.Root` from `@radix-ui/react-slider`. Additionally, it accepts the following props:

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the slider root element. |
| `value` | `number[]` | The controlled value of the slider. An array of numbers, where each number represents the value of a thumb. |
| `defaultValue` | `number[]` | The default value of the slider when it is initially rendered. |
| `onValueChange` | `(value: number[]) => void` | Event handler called when the value of the slider changes. |
| `max` | `number` | The maximum value of the slider. |
| `min` | `number` | The minimum value of the slider. |
| `step` | `number` | The step increment for the slider. |
| `disabled` | `boolean` | If `true`, the slider will be disabled. |
| `orientation` | `"horizontal"` \| `"vertical"` | The orientation of the slider. |
| `...props` | `React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>` | Standard props for Radix UI Slider Root. Refer to [Radix UI Slider documentation](https://www.radix-ui.com/docs/primitives/components/slider#root) for a full list. |

## Examples

### Basic Slider

```tsx
import { Slider } from "@/components/ui/slider";
import * as React from "react";

function BasicSliderExample() {
  const [value, setValue] = React.useState([30]);

  return (
    <Slider
      defaultValue={[30]}
      max={100}
      step={1}
      onValueChange={setValue}
      className="w-[80%]"
    />
  );
}
```

### Range Slider

```tsx
import { Slider } from "@/components/ui/slider";
import * => React from "react";

function RangeSliderExample() {
  const [range, setRange] = React.useState([20, 80]);

  return (
    <Slider
      defaultValue={[20, 80]}
      max={100}
      step={1}
      onValueChange={setRange}
      className="w-[80%]"
    />
  );
}
```

### Disabled Slider

```tsx
import { Slider } from "@/components/ui/slider";

function DisabledSliderExample() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      disabled
      className="w-[80%]"
    />
  );
}
```