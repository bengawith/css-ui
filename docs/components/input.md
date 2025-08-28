# Input

The `Input` component is a styled HTML input element, providing a consistent look and feel across your application. It supports all standard HTML input types and attributes.

## Usage

```tsx
import { Input } from "@/components/ui/input";

function InputDemo() {
  return <Input type="email" placeholder="Email" />;
}
```

## Props

The `Input` component extends all standard HTML `input` attributes.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the input element. |
| `type` | `string` | The type of the input element (e.g., "text", "email", "password", "number"). |
| `...props` | `React.ComponentProps<"input">` | All standard HTML `input` attributes. |

## Examples

### Text Input

```tsx
import { Input } from "@/components/ui/input";

function TextInputExample() {
  return <Input type="text" placeholder="Your Name" />;
}
```

### Email Input

```tsx
import { Input } from "@/components/ui/input";

function EmailInputExample() {
  return <Input type="email" placeholder="your@example.com" />;
}
```

### Password Input

```tsx
import { Input } from "@/components/ui/input";

function PasswordInputExample() {
  return <Input type="password" placeholder="Password" />;
}
```

### Number Input

```tsx
import { Input } from "@/components/ui/input";

function NumberInputExample() {
  return <Input type="number" placeholder="Age" />;
}
```

### Disabled Input

```tsx
import { Input } from "@/components/ui/input";

function DisabledInputExample() {
  return <Input type="text" placeholder="Disabled Input" disabled />;
}
```

### Input with Label

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function InputWithLabelExample() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  );
}
```