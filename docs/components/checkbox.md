# Checkbox

The `Checkbox` component is a controlled component that allows users to select or deselect an option. It is built on top of Radix UI's Checkbox primitive, providing accessibility and customizable styling.

## Installation

```bash
# No specific installation needed for individual components, as they are part of the UI library.
# Ensure you have `@radix-ui/react-checkbox` and `lucide-react` installed in your project.
npm install @radix-ui/react-checkbox lucide-react
# or
yarn add @radix-ui/react-checkbox lucide-react
```

## Usage

```tsx
import { Checkbox } from "@/components/ui/checkbox";

function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
```

## Props

The `Checkbox` component extends all props from `CheckboxPrimitive.Root` from `@radix-ui/react-checkbox`. Additionally, it accepts the following props:

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the checkbox root element. |
| `...props` | `React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>` | Standard props for Radix UI Checkbox Root. Refer to [Radix UI Checkbox documentation](https://www.radix-ui.com/docs/primitives/components/checkbox#root) for a full list. |

Key props from Radix UI include:
- `checked`: `boolean | 'indeterminate'` - The controlled checked state of the checkbox.
- `defaultChecked`: `boolean` - The default checked state when uncontrolled.
- `onCheckedChange`: `(checked: boolean | 'indeterminate') => void` - Event handler called when the checked state changes.
- `disabled`: `boolean` - If `true`, the checkbox will be disabled.
- `required`: `boolean` - If `true`, the checkbox will be required.

## Examples

### Basic Checkbox

```tsx
import { Checkbox } from "@/components/ui/checkbox";

function BasicCheckboxExample() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="basic" />
      <label htmlFor="basic">Basic Checkbox</label>
    </div>
  );
}
```

### Checked by Default

```tsx
import { Checkbox } from "@/components/ui/checkbox";

function DefaultCheckedCheckboxExample() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="defaultChecked" defaultChecked />
      <label htmlFor="defaultChecked">Checked by Default</label>
    </div>
  );
}
```

### Disabled Checkbox

```tsx
import { Checkbox } from "@/components/ui/checkbox";

function DisabledCheckboxExample() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" disabled />
      <label htmlFor="disabled">Disabled Checkbox</label>
    </div>
  );
}
```

### Checkbox with Label

```tsx
import { Checkbox } from "@/components/ui/checkbox";

function CheckboxWithLabelExample() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms2" />
      <label
        htmlFor="terms2"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  );
}
```