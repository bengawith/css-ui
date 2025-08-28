# AspectRatio

The `AspectRatio` component is a wrapper around Radix UI's `AspectRatioPrimitive.Root`. It helps in maintaining the aspect ratio of its content, ensuring that an element scales proportionally within its parent container.

## Usage

```tsx
import { AspectRatio } from "@/components/ui/aspect-ratio";

function AspectRatioDemo() {
  return (
    <div className="w-[450px] h-[300px] border">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <img
          src="https://images.unsplash.com/photo-1576075796033-848c2a5f05b3?w=800&dpr=2&q=80"
          alt="Photo by Dimensions"
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  );
}
```

## Components and Props

### `AspectRatio`

| Prop Name | Type | Description | Default |
|---|---|---|---|
| `ratio` | `number` | The desired aspect ratio (width / height). For example, `16 / 9` for a widescreen aspect ratio. | `1` |
| `className` | `string` | Additional CSS classes to apply to the aspect ratio container. | `""` |
| `children` | `React.ReactNode` | The content to be rendered within the aspect ratio container. | | 
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | Standard HTML `div` attributes. | |
