# Progress

The `Progress` component displays an indicator showing the completion progress of a task, typically as a progress bar. It is built on top of Radix UI's Progress primitive, providing accessible and customizable progress indicators.

## Installation

```bash
# No specific installation needed for individual components, as they are part of the UI library.
# Ensure you have `@radix-ui/react-progress` installed in your project.
npm install @radix-ui/react-progress
# or
yarn add @radix-ui/react-progress
```

## Usage

```tsx
import { Progress } from "@/components/ui/progress";
import * as React from "react";

function ProgressDemo() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
}
```

## Props

The `Progress` component extends all props from `ProgressPrimitive.Root` from `@radix-ui/react-progress`. Additionally, it accepts the following props:

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the progress root element. |
| `value` | `number` | The current value of the progress bar, from 0 to 100. |
| `...props` | `React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>` | Standard props for Radix UI Progress Root. Refer to [Radix UI Progress documentation](https://www.radix-ui.com/docs/primitives/components/progress#root) for a full list. |

## Examples

### Basic Progress Bar

```tsx
import { Progress } from "@/components/ui/progress";
import * as React from "react";

function BasicProgressExample() {
  const [progress, setProgress] = React.useState(25);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(75), 1000);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[80%]" />;
}
```

### Indeterminate Progress

For an indeterminate progress bar (e.g., when the total progress is unknown), you can omit the `value` prop.

```tsx
import { Progress } from "@/components/ui/progress";

function IndeterminateProgressExample() {
  return <Progress className="w-[80%]" />;
}
```