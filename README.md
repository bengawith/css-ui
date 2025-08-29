# @bengawith/ui

A custom UI package designed to centralize and streamline design features across multiple applications. Built with React, Radix UI, and Tailwind CSS, this library provides a set of reusable and accessible UI components.

## Installation

You can install this package using npm or pnpm:

```bash
npm install @bengawith/ui
# or
pnpm add @bengawith/ui
```

## Usage

### Importing Styles

To use the styles provided by this UI package, import the main CSS file into your project's entry point (e.g., `main.tsx`, `App.tsx`, or `index.js`):

```typescript
import '@bengawith/ui/dist/index.css';
```

### Using Components

Here's a basic example of how to use a component from this library:

```tsx
import { Button } from '@bengawith/ui';

function App() {
  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
}
```

### Using Hooks

This library also provides custom React hooks for common functionality:

```tsx
import { useIsMobile, useToast } from '@bengawith/ui';

// Detect mobile viewport
const isMobile = useIsMobile();

// Show toast notifications
const { toast } = useToast();
toast({
  title: "Success!",
  description: "Operation completed successfully."
});
```

For detailed usage and available props for each component and hook, please refer to the documentation:

- **[Components Documentation](./docs/components/)**
- **[Hooks Documentation](./docs/hooks/)**

## Contributing

Contributions are welcome! Please refer to the project's guidelines for contributing (if any exist, otherwise, a placeholder).

## License

This project is licensed under the ISC License.