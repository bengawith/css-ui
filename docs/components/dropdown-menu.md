# Dropdown Menu

The `DropdownMenu` component provides a highly customizable and accessible dropdown menu experience. It is built on top of Radix UI's DropdownMenu primitive, offering full control over content, styling, and behavior, including support for sub-menus, checkboxes, and radio items.

## Installation

```bash
# No specific installation needed for individual components, as they are part of the UI library.
# Ensure you have `@radix-ui/react-dropdown-menu` and `lucide-react` installed in your project.
npm install @radix-ui/react-dropdown-menu lucide-react
# or
yarn add @radix-ui/react-dropdown-menu lucide-react
```

## Usage

```tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

## Components and Props

The `DropdownMenu` component is composed of several sub-components, each extending props from their corresponding Radix UI primitive.

### `DropdownMenu`

The root component for the dropdown menu. It manages the open/closed state.

| Prop Name | Type | Description |
|---|---|---|
| `open` | `boolean` | The controlled open state of the dropdown menu. |
| `defaultOpen` | `boolean` | The open state of the dropdown menu when it is initially rendered. |
| `onOpenChange` | `(open: boolean) => void` | Event handler called when the open state of the dropdown menu changes. |
| `modal` | `boolean` | When `true`, the dropdown menu will be modal and block interaction with the rest of the page. |

### `DropdownMenuTrigger`

The element that opens the dropdown menu when clicked.

| Prop Name | Type | Description |
|---|---|---|
| `asChild` | `boolean` | If `true`, the trigger will render its child component instead of a `<button>` element, passing its props to the child. |
| `...props` | `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>` | Standard props for Radix UI DropdownMenu Trigger. |

### `DropdownMenuContent`

The main content area of the dropdown menu.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the content container. |
| `sideOffset` | `number` | The distance in pixels from the trigger to the content. | `4` |
| `...props` | `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>` | Standard props for Radix UI DropdownMenu Content. |

### `DropdownMenuItem`

An individual item within the dropdown menu.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the item. |
| `inset` | `boolean` | If `true`, adds left padding to align with items that have icons. | `false` |
| `...props` | `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>` | Standard props for Radix UI DropdownMenu Item. |

### `DropdownMenuCheckboxItem`

A dropdown menu item with a checkbox.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the item. |
| `checked` | `boolean | 'indeterminate'` | The controlled checked state of the checkbox. |
| `onCheckedChange` | `(checked: boolean | 'indeterminate') => void` | Event handler called when the checked state changes. |
| `...props` | `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>` | Standard props for Radix UI DropdownMenu CheckboxItem. |

### `DropdownMenuRadioItem`

A dropdown menu item with a radio button. Must be wrapped in `DropdownMenuRadioGroup`.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the item. |
| `value` | `string` | The value of the radio item. |
| `...props` | `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>` | Standard props for Radix UI DropdownMenu RadioItem. |

### `DropdownMenuLabel`

A non-interactive label within the dropdown menu.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the label. |
| `inset` | `boolean` | If `true`, adds left padding to align with items that have icons. | `false` |
| `...props` | `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>` | Standard props for Radix UI DropdownMenu Label. |

### `DropdownMenuSeparator`

A visual separator between dropdown menu items.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the separator. |
| `...props` | `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>` | Standard props for Radix UI DropdownMenu Separator. |

### `DropdownMenuShortcut`

A small text element to display keyboard shortcuts.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the shortcut text. |
| `...props` | `React.HTMLAttributes<HTMLSpanElement>` | Standard HTML `span` attributes. |

### `DropdownMenuGroup`

A logical grouping of dropdown menu items.

| Prop Name | Type | Description |
|---|---|---|
| `...props` | `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group>` | Standard props for Radix UI DropdownMenu Group. |

### `DropdownMenuPortal`

Portals the dropdown menu content to the end of the `body` element. This is automatically included when using `DropdownMenuContent`.

### `DropdownMenuSub`

The root component for a nested dropdown menu.

| Prop Name | Type | Description |
|---|---|---|
| `...props` | `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Sub>` | Standard props for Radix UI DropdownMenu Sub. |

### `DropdownMenuSubTrigger`

The element that opens a sub-menu when hovered or clicked.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the sub-trigger. |
| `inset` | `boolean` | If `true`, adds left padding to align with items that have icons. | `false` |
| `...props` | `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>` | Standard props for Radix UI DropdownMenu SubTrigger. |

### `DropdownMenuSubContent`

The content area of a sub-menu.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the sub-content container. |
| `...props` | `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>` | Standard props for Radix UI DropdownMenu SubContent. |

### `DropdownMenuRadioGroup`

A group of `DropdownMenuRadioItem` components, ensuring only one can be selected at a time.

| Prop Name | Type | Description |
|---|---|---|
| `value` | `string` | The controlled value of the radio group. |
| `onValueChange` | `(value: string) => void` | Event handler called when the value of the radio group changes. |
| `...props` | `React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioGroup>` | Standard props for Radix UI DropdownMenu RadioGroup. |

## Examples

### Dropdown Menu with Checkboxes

```tsx
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import * as React from "react";

function DropdownMenuCheckboxDemo() {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

### Dropdown Menu with Radio Group

```tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import * as React from "react";

function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```