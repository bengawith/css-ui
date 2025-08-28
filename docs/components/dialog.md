# Dialog

The `Dialog` component provides a highly customizable and accessible dialog (modal) experience. It is built on top of Radix UI's Dialog primitive, offering full control over content, styling, and behavior.

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
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
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
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

## Components and Props

The `Dialog` component is composed of several sub-components, each extending props from their corresponding Radix UI primitive.

### `Dialog`

The root component for the dialog. It manages the open/closed state.

| Prop Name | Type | Description |
|---|---|---|
| `open` | `boolean` | The controlled open state of the dialog. |
| `defaultOpen` | `boolean` | The open state of the dialog when it is initially rendered. |
| `onOpenChange` | `(open: boolean) => void` | Event handler called when the open state of the dialog changes. |
| `modal` | `boolean` | When `true`, the dialog will be modal and block interaction with the rest of the page. |

### `DialogTrigger`

The element that opens the dialog when clicked.

| Prop Name | Type | Description |
|---|---|---|
| `asChild` | `boolean` | If `true`, the trigger will render its child component instead of a `<button>` element, passing its props to the child. |
| `...props` | `React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>` | Standard props for Radix UI Dialog Trigger. |

### `DialogPortal`

Portals the dialog content to the end of the `body` element. This is automatically included when using `DialogContent`.

### `DialogOverlay`

A dimming overlay that appears behind the dialog content.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the overlay. |
| `...props` | `React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>` | Standard props for Radix UI Dialog Overlay. |

### `DialogContent`

The main content area of the dialog.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the content container. |
| `children` | `React.ReactNode` | The content to be rendered inside the dialog. |
| `...props` | `React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>` | Standard props for Radix UI Dialog Content. |

### `DialogClose`

A button that closes the dialog when clicked. Automatically included within `DialogContent`.

| Prop Name | Type | Description |
|---|---|---|
| `...props` | `React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>` | Standard props for Radix UI Dialog Close. |

### `DialogHeader`

A container for the dialog's title and description.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the header. |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | Standard HTML `div` attributes. |

### `DialogFooter`

A container for actions or supplementary information at the bottom of the dialog.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the footer. |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | Standard HTML `div` attributes. |

### `DialogTitle`

The title of the dialog.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the title. |
| `...props` | `React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>` | Standard props for Radix UI Dialog Title. |

### `DialogDescription`

A descriptive text for the dialog, typically placed below the title.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the description. |
| `...props` | `React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>` | Standard props for Radix UI Dialog Description. |

## Examples

### Basic Dialog

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function BasicDialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
```