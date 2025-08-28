# Sheet

The `Sheet` component is a panel that slides in from the edge of the screen. It's often used for navigation, forms, or supplementary content, similar to a modal but with a different presentation. It is built on top of Radix UI's Dialog primitive, providing accessible and customizable sheet functionality.

## Installation

```bash
# No specific installation needed for individual components, as they are part of the UI library.
# Ensure you have `@radix-ui/react-dialog` and `lucide-react` installed in your project.
npm install @radix-ui/react-dialog lucide-react
# or
yarn add @radix-ui/react-dialog lucide-react
```

## Usage

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

function SheetDemo() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
```

## Components and Props

The `Sheet` component is composed of several sub-components, each extending props from their corresponding Radix UI Dialog primitive.

### `Sheet`

The root component for the sheet. It manages the open/closed state.

| Prop Name | Type | Description |
|---|---|---|
| `open` | `boolean` | The controlled open state of the sheet. |
| `defaultOpen` | `boolean` | The open state of the sheet when it is initially rendered. |
| `onOpenChange` | `(open: boolean) => void` | Event handler called when the open state of the sheet changes. |
| `modal` | `boolean` | When `true`, the sheet will be modal and block interaction with the rest of the page. |

### `SheetTrigger`

The element that opens the sheet when clicked.

| Prop Name | Type | Description |
|---|---|---|
| `asChild` | `boolean` | If `true`, the trigger will render its child component instead of a `<button>` element, passing its props to the child. |
| `...props` | `React.ComponentPropsWithoutRef<typeof SheetPrimitive.Trigger>` | Standard props for Radix UI Dialog Trigger. |

### `SheetClose`

A button that closes the sheet when clicked.

| Prop Name | Type | Description |
|---|---|---|
| `asChild` | `boolean` | If `true`, the close button will render its child component instead of a `<button>` element, passing its props to the child. |
| `...props` | `React.ComponentPropsWithoutRef<typeof SheetPrimitive.Close>` | Standard props for Radix UI Dialog Close. |

### `SheetPortal`

Portals the sheet content to the end of the `body` element. This is automatically included when using `SheetContent`.

### `SheetOverlay`

A dimming overlay that appears behind the sheet content.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the overlay. |
| `...props` | `React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>` | Standard props for Radix UI Dialog Overlay. |

### `SheetContent`

The main content area of the sheet.

| Prop Name | Type | Description | Default |
|---|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the content container. | `""` |
| `side` | `"top"` \| `"right"` \| `"bottom"` \| `"left"` | The side from which the sheet will slide in. | `"right"` |
| `children` | `React.ReactNode` | The content to be rendered inside the sheet. | |
| `...props` | `React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>` | Standard props for Radix UI Dialog Content. |

### `SheetHeader`

A container for the sheet's title and description.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the header. |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | Standard HTML `div` attributes. |

### `SheetFooter`

A container for actions or supplementary information at the bottom of the sheet.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the footer. |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | Standard HTML `div` attributes. |

### `SheetTitle`

The title of the sheet.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the title. |
| `...props` | `React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>` | Standard props for Radix UI Dialog Title. |

### `SheetDescription`

A descriptive text for the sheet, typically placed below the title.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the description. |
| `...props` | `React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>` | Standard props for Radix UI Dialog Description. |

## Examples

### Sheet from Left

```tsx
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function LeftSheetExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Left Sheet</SheetTitle>
        </SheetHeader>
        <div className="py-4">
          <p>Content sliding in from the left.</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
```

### Sheet from Top

```tsx
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function TopSheetExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Top</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Top Sheet</SheetTitle>
        </SheetHeader>
        <div className="py-4">
          <p>Content sliding in from the top.</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
```