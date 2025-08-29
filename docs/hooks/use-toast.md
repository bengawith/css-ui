# useToast

The `useToast` hook provides a programmatic way to display toast notifications in your React application. It manages toast state globally and provides methods to show, update, and dismiss toasts.

## Installation

```bash
# No specific installation needed for individual hooks, as they are part of the UI library.
# Make sure you have the Toast components set up in your app.
```

## Setup

First, ensure you have the `Toaster` component mounted in your app:

```tsx
import { Toaster } from "@bengawith/ui";

function App() {
  return (
    <div>
      {/* Your app content */}
      <Toaster />
    </div>
  );
}
```

## Usage

### Basic Toast

```tsx
import { useToast } from "@bengawith/ui";

function MyComponent() {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: "Success!",
      description: "Your action was completed successfully.",
    });
  };

  return (
    <button onClick={showToast}>
      Show Toast
    </button>
  );
}
```

### Toast with Action

```tsx
import { useToast } from "@bengawith/ui";

function MyComponent() {
  const { toast } = useToast();

  const showActionToast = () => {
    toast({
      title: "File uploaded",
      description: "Your file has been uploaded successfully.",
      action: (
        <button onClick={() => console.log("Action clicked!")}>
          View File
        </button>
      ),
    });
  };

  return (
    <button onClick={showActionToast}>
      Upload File
    </button>
  );
}
```

### Toast Variants

```tsx
import { useToast } from "@bengawith/ui";

function MyComponent() {
  const { toast } = useToast();

  const showErrorToast = () => {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Something went wrong. Please try again.",
    });
  };

  return (
    <button onClick={showErrorToast}>
      Trigger Error
    </button>
  );
}
```

## API

### Hook Return Value

The `useToast` hook returns an object with the following properties:

| Property | Type | Description |
|---|---|---|
| `toast` | `function` | Function to create and display a new toast |
| `dismiss` | `function` | Function to dismiss a specific toast or all toasts |
| `toasts` | `ToasterToast[]` | Array of currently active toasts |

### Toast Function

```typescript
toast(props: {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  variant?: "default" | "destructive";
  duration?: number;
})
```

Returns an object with:
- `id`: Unique identifier for the toast
- `dismiss`: Function to dismiss this specific toast
- `update`: Function to update this toast's properties

### Dismiss Function

```typescript
dismiss(toastId?: string)
```

- If `toastId` is provided, dismisses that specific toast
- If no `toastId` is provided, dismisses all toasts

## Advanced Usage

### Programmatic Toast Management

```tsx
import { useToast } from "@bengawith/ui";

function ToastManager() {
  const { toast, dismiss, toasts } = useToast();

  const showMultipleToasts = () => {
    const toast1 = toast({ title: "First toast" });
    const toast2 = toast({ title: "Second toast" });

    // Dismiss specific toast after 2 seconds
    setTimeout(() => {
      toast1.dismiss();
    }, 2000);

    // Dismiss all toasts after 5 seconds
    setTimeout(() => {
      dismiss();
    }, 5000);
  };

  return (
    <div>
      <button onClick={showMultipleToasts}>
        Show Multiple Toasts
      </button>
      <p>Active toasts: {toasts.length}</p>
    </div>
  );
}
```

### Toast with Custom Action

```tsx
import { useToast } from "@bengawith/ui";

function CustomActionToast() {
  const { toast } = useToast();

  const showCustomToast = () => {
    toast({
      title: "Action Required",
      description: "Please review and confirm your changes.",
      action: (
        <div className="flex gap-2">
          <button
            onClick={() => console.log("Confirmed")}
            className="bg-primary text-primary-foreground px-3 py-1 rounded"
          >
            Confirm
          </button>
          <button
            onClick={() => console.log("Cancelled")}
            className="bg-secondary px-3 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      ),
    });
  };

  return (
    <button onClick={showCustomToast}>
      Show Custom Action Toast
    </button>
  );
}
```

## Features

- **Global State Management**: Toasts are managed globally across your app
- **Auto-dismiss**: Toasts automatically dismiss after a configurable delay
- **Queue Management**: Only one toast is shown at a time (configurable)
- **SSR Compatible**: Works with server-side rendering
- **TypeScript Support**: Full TypeScript support with proper types
- **Accessible**: Built on top of Radix UI primitives for accessibility

## Configuration

The hook has some internal configuration:

- **Toast Limit**: Maximum of 1 toast shown at a time
- **Auto-dismiss Delay**: 1,000,000ms (about 16.7 minutes) - effectively disabled by default
- **Toast IDs**: Auto-generated unique identifiers

## Notes

- Make sure the `Toaster` component is mounted in your app for toasts to be visible
- Toasts are dismissed when users interact with them or when `dismiss()` is called
- The hook uses a global state management system, so toasts persist across component re-renders
- For custom toast positioning or styling, modify the `Toaster` component placement in your app
