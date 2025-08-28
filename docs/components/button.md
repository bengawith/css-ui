# Button

The `Button` component is a customizable button that supports various visual styles and sizes. It is built using `cva` (class-variance-authority) for flexible styling based on props.

## Installation

```bash
# No specific installation needed for individual components, as they are part of the UI library.
# Ensure your project is set up with Tailwind CSS and `class-variance-authority`.
```

## Usage

```tsx
import { Button } from "@/components/ui/button";

function App() {
  return (
    <Button>Click Me</Button>
  );
}
```

## Props

The `Button` component extends standard HTML `button` attributes and accepts the following additional props:

| Prop Name | Type | Description | Default |
|---|---|---|---|
| `variant` | `"default"` \| `"destructive"` \| `"outline"` \| `"secondary"` \| `"ghost"` \| `"link"` | Defines the visual style of the button. | `"default"` |
| `size` | `"default"` \| `"sm"` \| `"lg"` \| `"icon"` | Defines the size of the button. | `"default"` |
| `asChild` | `boolean` | If `true`, the button will render its child component instead of a `<button>` element, passing its props to the child. | `false` |

## Examples

### Default Button

```tsx
import { Button } from "@/components/ui/button";

function DefaultButtonExample() {
  return <Button>Default Button</Button>;
}
```

### Destructive Button

```tsx
import { Button } from "@/components/ui/button";

function DestructiveButtonExample() {
  return <Button variant="destructive">Delete</Button>;
}
```

### Outline Button

```tsx
import { Button } from "@/components/ui/button";

function OutlineButtonExample() {
  return <Button variant="outline">Learn More</Button>;
}
```

### Secondary Button

```tsx
import { Button } from "@/components/ui/button";

function SecondaryButtonExample() {
  return <Button variant="secondary">Cancel</Button>;
}
```

### Ghost Button

```tsx
import { Button } from "@/components/ui/button";

function GhostButtonExample() {
  return <Button variant="ghost">Dismiss</Button>;
}
```

### Link Button

```tsx
import { Button } from "@/components/ui/button";

function LinkButtonExample() {
  return <Button variant="link">Visit Website</Button>;
}
```

### Small Button

```tsx
import { Button } from "@/components/ui/button";

function SmallButtonExample() {
  return <Button size="sm">Small Button</Button>;
}
```

### Large Button

```tsx
import { Button } from "@/components/ui/button";

function LargeButtonExample() {
  return <Button size="lg">Large Button</Button>;
}
```

### Icon Button

```tsx
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons"; // Example icon

function IconButtonExample() {
  return (
    <Button size="icon">
      <PlusIcon />
    </Button>
  );
}
```

### Button as Child

```tsx
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Example with Next.js Link

function ButtonAsChildExample() {
  return (
    <Button asChild>
      <Link href="/dashboard">Dashboard</Link>
    </Button>
  );
}
```
