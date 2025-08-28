# Theming

This UI component library uses [Tailwind CSS](https://tailwindcss.com/) for styling and offers extensive theming capabilities through CSS variables. This allows for easy customization of colors, borders, and other design tokens to match your brand.

## How Theming Works

The core of the theming system is based on CSS variables defined in `src/index.css`. These variables are then consumed by Tailwind CSS classes defined in `tailwind.config.ts`.

### CSS Variables

The `src/index.css` file defines a set of CSS variables for both light and dark themes. These variables control the primary colors, background, foreground, borders, and more.

**Example (Light Theme Variables):**

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 217 91% 20%;
  --primary-foreground: 210 40% 98%;
  /* ... other variables */
}
```

**Example (Dark Theme Variables):**

```css
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
  /* ... other variables */
}
```

You can override these variables in your own CSS to change the theme. For example, to change the primary color:

```css
/* In your application's main CSS file */
:root {
  --primary: 10 80% 50%; /* A new primary color for light theme */
}

.dark {
  --primary: 10 80% 70%; /* A new primary color for dark theme */
}
```

### Tailwind CSS Configuration

The `tailwind.config.ts` file extends Tailwind's default theme with custom colors that reference these CSS variables.

**Example (`tailwind.config.ts`):**

```typescript
import type { Config } from "tailwindcss";

export default {
  // ...
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          glow: 'hsl(var(--primary-glow))'
        },
        // ... other custom colors
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': { /* ... */ },
        'accordion-up': { /* ... */ }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
} satisfies Config;
```

This setup allows you to use Tailwind classes like `bg-primary`, `text-primary-foreground`, `border-border`, etc., and they will automatically pick up the colors defined by your CSS variables.

### Customizing Border Radius

The `tailwind.config.ts` also defines custom border-radius values using the `--radius` CSS variable.

```css
/* In src/index.css or your custom CSS */
:root {
  --radius: 0.5rem; /* Default border radius */
}
```

You can change this variable to adjust the global border-radius for components that use `rounded-lg`, `rounded-md`, or `rounded-sm`.

### Animations

The library includes custom keyframes and animations for components like Accordion, defined in `tailwind.config.ts` and powered by `tailwindcss-animate`.

## Dark Mode

The library supports dark mode out-of-the-box. The `tailwind.config.ts` is configured with `darkMode: ["class"]`, meaning dark mode is activated by adding the `dark` class to your HTML element (e.g., `<html class="dark">`). The CSS variables in `src/index.css` provide the specific color values for the dark theme.
