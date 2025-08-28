# Badge

The Badge component is used to highlight small pieces of information, such as counts, labels, or status indicators. It offers different visual variants to suit various contexts.

## Usage

To use the Badge, import the `Badge` component.

```tsx
import { Badge } from "@css-support-systems/ui";

function MyBadges() {
  return (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}

export default MyBadges;
```

## Props

In addition to standard `HTMLDivElement` attributes, the `Badge` component accepts the following `variant` prop:

| Prop      | Type                                         | Default     | Description                               |
| :-------- | :------------------------------------------- | :---------- | :---------------------------------------- |
| `variant` | `"default" \| "secondary" \| "destructive" \| "outline"` | `"default"` | Defines the visual style of the badge.    |
