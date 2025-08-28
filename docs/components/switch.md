# Switch

The `Switch` component is a control that allows users to toggle between two states (on/off). It is built on top of Radix UI's Switch primitive, providing accessible and customizable toggle functionality.

## Installation

```bash
# No specific installation needed for individual components, as they are part of the UI library.
# Ensure you have `@radix-ui/react-switch` installed in your project.
npm install @radix-ui/react-switch
# or
yarn add @radix-ui/react-switch
```

## Usage

```tsx
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}
```

## Props

The `Switch` component extends all props from `SwitchPrimitives.Root` from `@radix-ui/react-switch`. Additionally, it accepts the following props:

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the switch root element. |
| `checked` | `boolean` | The controlled checked state of the switch. |
| `defaultChecked` | `boolean` | The default checked state of the switch when it is initially rendered. |
| `onCheckedChange` | `(checked: boolean) => void` | Event handler called when the checked state of the switch changes. |
| `disabled` | `boolean` | If `true`, the switch will be disabled. |
| `required` | `boolean` | If `true`, the switch will be required. |
| `name` | `string` | The name of the switch input. Useful for form submissions. |
| `value` | `string` | The value of the switch input. |
| `...props` | `React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>` | Standard props for Radix UI Switch Root. Refer to [Radix UI Switch documentation](https://www.radix-ui.com/docs/primitives/components/switch#root) for a full list. |

## Examples

### Basic Switch

```tsx
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import * as React from "react";

function BasicSwitchExample() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex items-center space-x-2">
      <Switch id="basic-switch" checked={checked} onCheckedChange={setChecked} />
      <Label htmlFor="basic-switch">Enable Feature</Label>
    </div>
  );
}
```

### Disabled Switch

```tsx
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

function DisabledSwitchExample() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="disabled-switch" disabled />
      <Label htmlFor="disabled-switch">Disabled Option</Label>
    </div>
  );
}
```