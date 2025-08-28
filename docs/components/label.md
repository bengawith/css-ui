# Label

The `Label` component provides an accessible and customizable label for form elements. It is built on top of Radix UI's Label primitive, ensuring proper association with input fields.

## Installation

```bash
# No specific installation needed for individual components, as they are part of the UI library.
# Ensure you have `@radix-ui/react-label` installed in your project.
npm install @radix-ui/react-label
# or
yarn add @radix-ui/react-label
```

## Usage

```tsx
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function LabelDemo() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Your Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  );
}
```

## Props

The `Label` component extends all props from `LabelPrimitive.Root` from `@radix-ui/react-label`. Additionally, it accepts the following props:

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the label element. |
| `...props` | `React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>` | Standard props for Radix UI Label Root. Refer to [Radix UI Label documentation](https://www.radix-ui.com/docs/primitives/components/label#root) for a full list. |

Key props from Radix UI include:
- `htmlFor`: `string` - The ID of the form element the label is associated with.

## Examples

### Basic Label

```tsx
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

function BasicLabelExample() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="username">Username</Label>
      <Input type="text" id="username" placeholder="Enter your username" />
    </div>
  );
}
```

### Label for Checkbox

```tsx
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

function LabelForCheckboxExample() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}
```