# Hooks

This section contains documentation for the custom React hooks provided by the UI library. These hooks help you build responsive and interactive user interfaces with ease.

## Available Hooks

### [useIsMobile](./use-mobile.md)

A hook for detecting mobile viewport sizes. It provides a simple boolean value that indicates whether the current viewport is mobile-sized (less than 768px).

**Use cases:**
- Conditional rendering based on screen size
- Mobile-specific UI adjustments
- Responsive component behavior

```tsx
import { useIsMobile } from "@bengawith/ui";

const isMobile = useIsMobile();
// Returns true if viewport < 768px
```

### [useToast](./use-toast.md)

A comprehensive hook for managing toast notifications. It provides methods to show, update, and dismiss toasts programmatically.

**Use cases:**
- User feedback messages
- Success/error notifications
- Action confirmations
- Status updates

```tsx
import { useToast } from "@bengawith/ui";

const { toast } = useToast();

toast({
  title: "Success!",
  description: "Operation completed successfully."
});
```

## Getting Started

1. **Import the hooks** from the main package:
   ```tsx
   import { useIsMobile, useToast } from "@bengawith/ui";
   ```

2. **For useToast**, ensure you have the `Toaster` component mounted:
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

## Features

- **TypeScript Support**: Full type safety and IntelliSense
- **SSR Compatible**: Works with server-side rendering
- **Performance Optimized**: Efficient state management and event handling
- **Accessible**: Built with accessibility best practices
- **Customizable**: Flexible API for various use cases

## Examples

### Responsive Design with useIsMobile

```tsx
import { useIsMobile } from "@bengawith/ui";

function ResponsiveLayout() {
  const isMobile = useIsMobile();

  return (
    <div className={isMobile ? "mobile-layout" : "desktop-layout"}>
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </div>
  );
}
```

### Toast Notifications with useToast

```tsx
import { useToast } from "@bengawith/ui";

function UserActions() {
  const { toast } = useToast();

  const handleSave = async () => {
    try {
      await saveData();
      toast({
        title: "Success",
        description: "Data saved successfully!",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save data. Please try again.",
      });
    }
  };

  return <button onClick={handleSave}>Save</button>;
}
```

## Best Practices

- **useIsMobile**: Use for layout decisions, not for hiding/showing content that should be accessible on all devices
- **useToast**: Keep toast messages concise and actionable. Use appropriate variants for different message types
- **Performance**: These hooks are optimized for performance, but avoid calling them unnecessarily in render functions

## Need Help?

If you have questions about using these hooks or need help with implementation, check the individual hook documentation or refer to the component documentation for related UI elements.
