# Toggle

The `Toggle` component is a two-state button that can be toggled on or off. It's built on top of Radix UI's `TogglePrimitive.Root` and supports different visual variants and sizes.

## Usage

```tsx
import { Toggle } from "@/components/ui/toggle";
import { Bold } from "lucide-react";

function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}

function ToggleVariantsDemo() {
  return (
    <div className="flex space-x-2">
      <Toggle variant="default" aria-label="Toggle default">
        Default
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle outline">
        Outline
      </Toggle>
    </div>
  );
}

function ToggleSizesDemo() {
  return (
    <div className="flex space-x-2">
      <Toggle size="sm" aria-label="Toggle small">
        Small
      </Toggle>
      <Toggle size="default" aria-label="Toggle default">
        Default
      </Toggle>
      <Toggle size="lg" aria-label="Toggle large">
        Large
      </Toggle>
    </div>
  );
}
```

## Components and Props

### `Toggle`

| Prop Name | Type | Description | Default |
|---|---|---|---|
| `variant` | `"default"` \| `"outline"` | The visual style of the toggle. | `"default"` |
| `size` | `"default"` \| `"sm"` \| `"lg"` | The size of the toggle. | `"default"` |
| `className` | `string` | Additional CSS classes to apply to the toggle button. | `""` |
| `...props` | `React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>` | Standard props for Radix UI's Toggle Root component. | |
