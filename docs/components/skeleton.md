# Skeleton

The `Skeleton` component is a low-level utility that can be used to indicate a loading state. It provides a visual placeholder for content that is not yet ready to be displayed, improving the perceived performance of your application.

## Usage

```tsx
import { Skeleton } from "@/components/ui/skeleton";

function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
```

## Props

The `Skeleton` component accepts standard HTML `div` attributes.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the skeleton element. |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | Standard HTML `div` attributes. |

## Examples

### Basic Skeleton

```tsx
import { Skeleton } from "@/components/ui/skeleton";

function BasicSkeletonExample() {
  return <Skeleton className="h-10 w-48" />;
}
```

### Skeleton for Text Block

```tsx
import { Skeleton } from "@/components/ui/skeleton";

function TextBlockSkeletonExample() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-[80%]" />
      <Skeleton className="h-4 w-[90%]" />
    </div>
  );
}
```

### Skeleton for Avatar and Text

```tsx
import { Skeleton } from "@/components/ui/skeleton";

function AvatarTextSkeletonExample() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-16 w-16 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
    </div>
  );
}
```