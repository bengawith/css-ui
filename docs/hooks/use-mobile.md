# useIsMobile

The `useIsMobile` hook provides a simple way to detect if the current viewport is mobile-sized based on a predefined breakpoint.

## Installation

```bash
# No specific installation needed for individual hooks, as they are part of the UI library.
```

## Usage

```tsx
import { useIsMobile } from "@bengawith/ui";

function ResponsiveComponent() {
  const isMobile = useIsMobile();

  return (
    <div>
      {isMobile ? (
        <p>Mobile layout</p>
      ) : (
        <p>Desktop layout</p>
      )}
    </div>
  );
}
```

## API

### Returns

- **`boolean`**: Returns `true` if the viewport width is less than 768px (mobile breakpoint), `false` otherwise.

## Features

- **SSR Safe**: Returns `false` on the server side until hydration completes
- **Responsive**: Automatically updates when the viewport size changes
- **Performance**: Uses `matchMedia` API for efficient media query listening
- **Cleanup**: Automatically removes event listeners on unmount

## Breakpoint

The hook uses a mobile breakpoint of **768px**. Any viewport width below this threshold is considered mobile.

```tsx
// Mobile: < 768px
// Desktop: >= 768px
const MOBILE_BREAKPOINT = 768;
```

## Example with Conditional Rendering

```tsx
import { useIsMobile } from "@bengawith/ui";

function Navigation() {
  const isMobile = useIsMobile();

  return (
    <nav>
      {isMobile ? (
        <MobileMenu />
      ) : (
        <DesktopMenu />
      )}
    </nav>
  );
}
```

## Notes

- The hook initially returns `false` on the server side to prevent hydration mismatches
- It automatically updates when the user resizes their browser window
- No manual cleanup is required as the hook handles event listener removal automatically
