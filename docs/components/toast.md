# Toast

The `Toast` system provides a way to display brief, temporary messages to the user. It's designed for notifications that don't require immediate user interaction and disappear automatically after a short period. The system consists of `ToastProvider`, `Toaster`, and the `useToast` hook.

## Installation

```bash
# No specific installation needed for individual components, as they are part of the UI library.
# Ensure you have `@radix-ui/react-toast` and `lucide-react` installed in your project.
npm install @radix-ui/react-toast lucide-react
# or
yarn add @radix-ui/react-toast lucide-react
```

## Setup

To use the toast system, you need to wrap your application (or a part of it where you want toasts to be available) with `ToastProvider` and render the `Toaster` component. Typically, `ToastProvider` and `Toaster` are placed at the root of your application.

```tsx
// In your App.tsx or Layout.tsx
import { Toaster } from "@/components/ui/toaster";
import { ToastProvider } from "@/components/ui/toast"; // Import ToastProvider

function App() {
  return (
    <ToastProvider> {/* Wrap your application with ToastProvider */}
      {/* Your application content */}
      <Toaster /> {/* Render the Toaster component */}
    </ToastProvider>
  );
}
```

## Usage

To display a toast, use the `useToast` hook to get the `toast` function, and then call it with the desired toast properties.

```tsx
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

function ToastDemo() {
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        });
      }}
    >
      Show Toast
    </Button>
  );
}
```

## Components and Props

### `ToastProvider`

The context provider for the toast system. It should wrap the part of your application where you want to use toasts.

| Prop Name | Type | Description |
|---|---|---|
| `children` | `React.ReactNode` | The child components to be rendered within the provider's context. |

### `Toaster`

The component responsible for rendering all active toasts. It should be placed within the `ToastProvider`.

| Prop Name | Type | Description |
|---|---|---|
| (None) | | This component consumes the toast state from `useToast` and renders the toasts. |

### `useToast` Hook

A React hook that provides access to the `toast` function and the list of active `toasts`.

```typescript
interface Toast {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
  // ... other props that can be passed to ToastPrimitives.Root
}

interface UseToastReturn {
  toasts: Toast[];
  toast: (props: Omit<Toast, 'id'>) => void;
}
```

The `toast` function accepts an object with the following properties:

| Prop Name | Type | Description |
|---|---|---|
| `title` | `React.ReactNode` | The main title of the toast. |
| `description` | `React.ReactNode` | A more detailed description for the toast. |
| `action` | `React.ReactNode` | An optional action button to display within the toast. Use `ToastAction` component. |
| `variant` | `"default"` \| `"destructive"` | The visual style of the toast. | `"default"` |
| `duration` | `number` | How long the toast should remain visible in milliseconds. | `5000` (default from Radix UI) |
| `...props` | `React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>` | Any other props supported by Radix UI's `Toast.Root` component. |

### `Toast`

The visual representation of a single toast message. This component is rendered internally by `Toaster`.

| Prop Name | Type | Description |
|---|---|---|
| `variant` | `"default"` \| `"destructive"` | The visual style of the toast. | `"default"` |
| `...props` | `React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>` | Standard props for Radix UI Toast Root. |

### `ToastAction`

An action button that can be included within a toast.

| Prop Name | Type | Description |
|---|---|---|
| `altText` | `string` | Accessible text for the action button. |
| `...props` | `React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>` | Standard props for Radix UI Toast Action. |

### `ToastClose`

A close button for the toast.

| Prop Name | Type | Description |
|---|---|---|
| `...props` | `React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>` | Standard props for Radix UI Toast Close. |

### `ToastTitle`

The title content of a toast.

| Prop Name | Type | Description |
|---|---|---|
| `...props` | `React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>` | Standard props for Radix UI Toast Title. |

### `ToastDescription`

The description content of a toast.

| Prop Name | Type | Description |
|---|---|---|
| `...props` | `React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>` | Standard props for Radix UI Toast Description. |

## Examples

### Toast with Action

```tsx
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

function ToastWithActionDemo() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }}
    >
      Show Action Toast
    </Button>
  );
}
```

### Destructive Toast

```tsx
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

function DestructiveToastDemo() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }}
    >
      Show Destructive Toast
    </Button>
  );
}
```