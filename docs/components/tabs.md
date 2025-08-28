# Tabs

The `Tabs` component is a set of layered sections of content, known as tab panels, that are displayed one at a time. It is built on top of Radix UI's Tabs primitive, providing accessible and customizable tab functionality.

## Installation

```bash
# No specific installation needed for individual components, as they are part of the UI library.
# Ensure you have `@radix-ui/react-tabs` installed in your project.
npm install @radix-ui/react-tabs
# or
yarn add @radix-ui/react-tabs
```

## Usage

```tsx
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
```

## Components and Props

The `Tabs` component is composed of several sub-components, each extending props from their corresponding Radix UI primitive.

### `Tabs`

The root component for the tabs. It manages the active tab.

| Prop Name | Type | Description |
|---|---|---|
| `value` | `string` | The controlled value of the currently active tab. |
| `defaultValue` | `string` | The value of the tab that should be active when initially rendered. |
| `onValueChange` | `(value: string) => void` | Event handler called when the active tab changes. |
| `orientation` | `"horizontal"` \| `"vertical"` | The orientation of the tabs. |
| `dir` | `"ltr"` \| `"rtl"` | The reading direction of the tabs. |
| `activationMode` | `"automatic"` \| `"manual"` | How the tabs are activated. `"automatic"` activates on focus, `"manual"` activates on click. |

### `TabsList`

A container for `TabsTrigger` components.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the list container. |
| `...props` | `React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>` | Standard props for Radix UI Tabs List. |

### `TabsTrigger`

An individual tab button that activates a corresponding `TabsContent` panel.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the trigger button. |
| `value` | `string` | The value associated with the tab. This must match the `value` of a `TabsContent` component. |
| `disabled` | `boolean` | If `true`, the tab will be disabled. |
| `...props` | `React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>` | Standard props for Radix UI Tabs Trigger. |

### `TabsContent`

The content panel associated with a `TabsTrigger`.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the content panel. |
| `value` | `string` | The value associated with the content panel. This must match the `value` of a `TabsTrigger` component. |
| `forceMount` | `boolean` | When `true`, the content will be rendered even when not active. |
| `...props` | `React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>` | Standard props for Radix UI Tabs Content. |

## Examples

### Basic Tabs

```tsx
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

function BasicTabsExample() {
  return (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1.</TabsContent>
      <TabsContent value="tab2">Content for Tab 2.</TabsContent>
      <TabsContent value="tab3">Content for Tab 3.</TabsContent>
    </Tabs>
  );
}
```

### Vertical Tabs

```tsx
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

function VerticalTabsExample() {
  return (
    <Tabs defaultValue="settings" orientation="vertical" className="flex">
      <TabsList className="flex flex-col h-auto p-1 mr-4">
        <TabsTrigger value="settings">Settings</TabsTrigger>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="settings" className="flex-1 p-4 border rounded-md">
        <h2 className="text-lg font-semibold">Settings</h2>
        <p>Manage your application settings here.</p>
      </TabsContent>
      <TabsContent value="profile" className="flex-1 p-4 border rounded-md">
        <h2 className="text-lg font-semibold">Profile</h2>
        <p>View and edit your profile information.</p>
      </TabsContent>
      <TabsContent value="notifications" className="flex-1 p-4 border rounded-md">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <p>Configure your notification preferences.</p>
      </TabsContent>
    </Tabs>
  );
}
```