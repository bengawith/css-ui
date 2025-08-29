# Documentation

Welcome to the documentation for `@bengawith/ui` - a comprehensive UI component library built with React, Radix UI, and Tailwind CSS.

## 📚 Documentation Sections

### 🎨 [Theming](./theming.md)
Learn how to customize the appearance of your UI components using CSS variables and Tailwind CSS. This section covers:
- CSS variable system
- Light/dark theme configuration
- Custom color schemes
- Brand integration

### 🧩 [Components](./components/)
Explore all available UI components with detailed usage examples and API documentation:
- Form controls (Button, Input, Select, etc.)
- Layout components (Card, Dialog, Sheet, etc.)
- Navigation (Tabs, Accordion, etc.)
- Feedback (Toast, Alert, Progress, etc.)
- And many more...

### 🪝 [Hooks](./hooks/)
Discover custom React hooks for enhanced functionality:
- **[useIsMobile](./hooks/use-mobile.md)** - Responsive breakpoint detection
- **[useToast](./hooks/use-toast.md)** - Programmatic toast notifications

## 🚀 Quick Start

1. **Install the package:**
   ```bash
   npm install @bengawith/ui
   # or
   pnpm add @bengawith/ui
   ```

2. **Import styles:**
   ```typescript
   import '@bengawith/ui/dist/index.css';
   ```

3. **Use components:**
   ```tsx
   import { Button, useToast } from '@bengawith/ui';

   function App() {
     const { toast } = useToast();

     return (
       <Button onClick={() => toast({ title: "Hello!" })}>
         Click me
       </Button>
     );
   }
   ```

## 📖 Component Categories

### Form Components
- Button, Input, Textarea, Select
- Checkbox, Radio Group, Switch, Slider
- Label, Form validation helpers

### Layout Components
- Card, Dialog, Sheet, Popover
- Tabs, Accordion, Separator
- Sidebar, Scroll Area

### Feedback Components
- Toast, Alert, Progress
- Skeleton, Spinner loaders
- Badge, Avatar

### Navigation Components
- Dropdown Menu, Context Menu
- Breadcrumb, Pagination
- Navigation patterns

## 🎯 Best Practices

- **Accessibility**: All components are built with Radix UI primitives for full accessibility support
- **TypeScript**: Complete TypeScript support with proper type definitions
- **Performance**: Optimized bundle size and tree-shaking support
- **SSR**: Compatible with server-side rendering
- **Customization**: Extensive theming and styling options

## 🤝 Contributing

When contributing to this library:
1. Follow the existing component patterns
2. Include comprehensive documentation
3. Add TypeScript types
4. Test your changes thoroughly
5. Update documentation as needed

## 📄 License

This project is licensed under the ISC License.

---

For questions or support, please refer to the individual component documentation or create an issue in the repository.
