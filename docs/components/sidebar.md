# Sidebar

The `Sidebar` component provides a flexible and customizable sidebar layout, often used for navigation. It supports a collapsible state, allowing it to switch between a default (expanded) and an icon-only (collapsed) view.

## Usage

The `Sidebar` component requires wrapping its children with `SidebarProvider` to manage its collapsible state.

```tsx
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, Settings, Users } from "lucide-react"; // Example icons

function SidebarDemo() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar className="border-r bg-background p-4">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>General</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem active>
                    <SidebarMenuButton>
                      <Users className="h-4 w-4" />
                      <span>Users</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Settings</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <div className="mt-auto">
            <SidebarTrigger />
          </div>
        </Sidebar>
        <main className="flex-1 p-4">
          <h1>Main Content Area</h1>
          <p>This is where your main application content goes.</p>
        </main>
      </div>
    </SidebarProvider>
  );
}
```

## Components and Props

### `SidebarProvider`

A context provider that manages the collapsible state of the sidebar. All `Sidebar` and `SidebarTrigger` components must be wrapped within this provider.

| Prop Name | Type | Description |
|---|---|---|
| `children` | `React.ReactNode` | The child components to be rendered within the provider's context. |

### `Sidebar`

The main container for the sidebar.

| Prop Name | Type | Description | Default |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the sidebar container. | `""` |
| `collapsible` | `"default"` \| `"icon"` | Controls the initial collapsible state of the sidebar. Can be `"default"` (expanded) or `"icon"` (collapsed). | `"default"` |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | Standard HTML `div` attributes. |

### `SidebarContent`

A container for the main content of the sidebar, typically used for scrollable areas.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the content container. |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | Standard HTML `div` attributes. |

### `SidebarGroup`

A logical grouping of sidebar items.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the group container. |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | Standard HTML `div` attributes. |

### `SidebarGroupLabel`

A label for a `SidebarGroup`.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the label. |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | Standard HTML `div` attributes. |

### `SidebarGroupContent`

A container for the actual items within a `SidebarGroup`.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the group content container. |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | Standard HTML `div` attributes. |

### `SidebarMenu`

A navigation menu within the sidebar.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the menu container. |
| `...props` | `React.HTMLAttributes<HTMLDivElement>` | Standard HTML `div` attributes. |

### `SidebarMenuItem`

An individual item within a `SidebarMenu`.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the menu item. |
| `active` | `boolean` | If `true`, applies active styling to the menu item. | `false` |
| `children` | `React.ReactNode` | The content of the menu item. |

### `SidebarMenuButton`

A button component typically used inside `SidebarMenuItem` for clickable navigation items.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the button. |
| `asChild` | `boolean` | If `true`, the button will render its child component instead of a `<button>` element, passing its props to the child. | `false` |
| `...props` | `React.ButtonHTMLAttributes<HTMLButtonElement>` | Standard HTML `button` attributes. |

### `SidebarTrigger`

A button that toggles the collapsible state of the sidebar.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the trigger button. |
| `...props` | `React.ButtonHTMLAttributes<HTMLButtonElement>` | Standard HTML `button` attributes. |

## Examples

### Collapsible Sidebar

The `SidebarTrigger` component automatically handles the collapsible state.

```tsx
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, Settings, Users } from "lucide-react";
import * as React from "react";

function CollapsibleSidebarExample() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar className="border-r bg-background p-4">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Home className="h-4 w-4" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Users className="h-4 w-4" />
                      <span>Team</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <div className="mt-auto">
            <SidebarTrigger />
          </div>
        </Sidebar>
        <main className="flex-1 p-4">
          <h1>Collapsible Sidebar Demo</h1>
          <p>Click the trigger button at the bottom of the sidebar to collapse/expand it.</p>
        </main>
      </div>
    </SidebarProvider>
  );
}
```