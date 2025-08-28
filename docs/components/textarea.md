# Textarea

The `Textarea` component provides a multi-line text input field, styled consistently with the UI library. It supports all standard HTML `textarea` attributes.

## Usage

```tsx
import { Textarea } from "@/components/ui/textarea";

function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />;
}
```

## Props

The `Textarea` component extends all standard HTML `textarea` attributes.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the textarea element. |
| `...props` | `React.TextareaHTMLAttributes<HTMLTextAreaElement>` | All standard HTML `textarea` attributes. |

## Examples

### Basic Textarea

```tsx
import { Textarea } from "@/components/ui/textarea";

function BasicTextareaExample() {
  return <Textarea placeholder="Enter your comments here..." />;
}
```

### Textarea with Default Value

```tsx
import { Textarea } from "@/components/ui/textarea";

function DefaultValueTextareaExample() {
  return <Textarea defaultValue="This is a default message." />;
}
```

### Disabled Textarea

```tsx
import { Textarea } from "@/components/ui/textarea";

function DisabledTextareaExample() {
  return <Textarea placeholder="This textarea is disabled." disabled />;
}
```

### Textarea with Label

```tsx
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function TextareaWithLabelExample() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your Message</Label>
      <Textarea placeholder="Type your message here." id="message" />
    </div>
  );
}
```