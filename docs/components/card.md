# Card

The `Card` component is a flexible content container that can be used to group related information and actions. It comes with several sub-components for structuring card content: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, and `CardFooter`.

## Usage

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function CardDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here. This can be any React node.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
```

## Components and Props

All `Card` sub-components accept standard HTML attributes for their respective underlying elements (`div`, `h3`, `p`).

### `Card`

The main container for card content.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the card container. |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | Standard HTML `div` attributes. |

### `CardHeader`

A container for the card's header, typically containing `CardTitle` and `CardDescription`.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the header. |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | Standard HTML `div` attributes. |

### `CardTitle`

The title of the card. Renders as an `<h3>` element.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the title. |
| `...props` | `React.HTMLAttributes<HTMLHeadingElement>` | Standard HTML `h3` attributes. |

### `CardDescription`

A descriptive text for the card, typically placed below the title. Renders as a `<p>` element.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the description. |
| `...props` | `React.HTMLAttributes<HTMLParagraphElement>` | Standard HTML `p` attributes. |

### `CardContent`

The main content area of the card.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the content area. |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | Standard HTML `div` attributes. |

### `CardFooter`

A container for actions or supplementary information at the bottom of the card.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the footer. |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | Standard HTML `div` attributes. |

## Examples

### Basic Card

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function BasicCardExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Card</CardTitle>
        <CardDescription>A simple card example.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the content of the basic card.</p>
      </CardContent>
    </Card>
  );
}
```

### Card with Footer

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function CardWithFooterExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
        <CardDescription>This card includes a footer section.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Some content here.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}
```