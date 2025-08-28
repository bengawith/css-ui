# CSS UI Component Library

This is a shared UI component library for CSS Support Systems' internal applications. It provides a standardized set of React components built with Radix UI and Tailwind CSS to ensure a consistent look and feel across all our tools.

## Project Overview

This library aims to streamline UI development across various CSS Support Systems applications by providing a centralized, reusable collection of high-quality, accessible, and customizable React components. Built on top of [Radix UI](https://www.radix-ui.com/) for unstyled, accessible primitives and [Tailwind CSS](https://tailwindcss.com/) for flexible styling, it ensures a consistent and modern user experience.

## Key Features

*   **Reusable Components:** A comprehensive set of UI components for common application needs.
*   **Accessible by Design:** Built with Radix UI, ensuring high accessibility standards.
*   **Tailwind CSS Integration:** Easily customizable and themeable using Tailwind CSS utility classes and configuration.
*   **Theming Support:** Supports light and dark modes with customizable color palettes via CSS variables.
*   **TypeScript Support:** Provides strong type definitions for a better developer experience.

## Installation

This library can be installed directly from its GitHub repository.

### From GitHub Repository

You can install the package directly from its public GitHub repository using `npm` or `yarn`. This method does not require a Personal Access Token (PAT) for public repositories.

**Using npm:**

```bash
npm install github:bengawith/css_ui#main
```

**Using yarn:**

```bash
yarn add github:bengawith/css_ui#main
```

**Adding to `package.json`:**

Alternatively, you can add it directly to your `package.json` dependencies:

```json
"dependencies": {
  "@css-support-systems/ui": "github:bengawith/css_ui#main"
}
```

Then run `npm install` or `yarn install`.

*(Note: If this repository were private, you would need a Personal Access Token (PAT) with `read:packages` scope, and the installation command would look like `npm install git+https://ghp_YOUR_PAT@github.com/bengawith/css_ui.git`)*

### From Private NPM Registry

For a more robust setup, publishing to a private NPM registry (like GitHub Packages) is recommended.

1.  **Authenticate with your registry:**
    ```bash
    npm login --registry=https://npm.pkg.github.com
    ```
    You will be prompted for your username, password (use a PAT), and email.

2.  **Install the package:**
    ```bash
    npm install @css-support-systems/ui
    ```

## Usage

To use the components and styles from this library in your application (`mill_dash` or `auto_report`), you need to configure your Tailwind CSS setup.

1.  **Configure `tailwind.config.ts`:**

    Update your `tailwind.config.ts` to include the paths to the library's components.

    ```typescript
    import type { Config } from "tailwindcss";

    export default {
      darkMode: ["class"],
      content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
        // Add the path to the installed library
        "./node_modules/@css-support-systems/ui/dist/**/*.{js,ts,jsx,tsx}",
      ],
      // ... rest of your config
    } satisfies Config;
    ```

2.  **Import the CSS:**

    Import the library's base stylesheet into your main CSS file (e.g., `src/index.css`).

    ```css
    @import "@css-support-systems/ui/dist/index.css";

    /* Your other base styles can go here */
    ```

3.  **Using a Component:**

    You can now import and use any component from the library.

    ```tsx
    import { Button } from "@css-support-systems/ui";

    const MyComponent = () => {
      return <Button>Click Me</Button>;
    };
    ```

## Theming

For detailed information on how to customize the look and feel of the components, including color palettes and dark mode, please refer to the [Theming Guide](./docs/theming.md).

## Component Documentation

This library provides a rich set of UI components. Each component is thoroughly documented, detailing its purpose, usage, available props, and practical examples.

*   [Accordion](./docs/components/accordion.md)
*   [Alert](./docs/components/alert.md)
*   [Alert Dialog](./docs/components/alert-dialog.md)
*   [Avatar](./docs/components/avatar.md)
*   [Badge](./docs/components/badge.md)
*   [Button](./docs/components/button.md)
*   [Calendar](./docs/components/calendar.md)
*   [Card](./docs/components/card.md)
*   [Checkbox](./docs/components/checkbox.md)
*   [Dialog](./docs/components/dialog.md)
*   [Dropdown Menu](./docs/components/dropdown-menu.md)
*   [Input](./docs/components/input.md)
*   [Label](./docs/components/label.md)
*   [Popover](./docs/components/popover.md)
*   [Progress](./docs/components/progress.md)
*   [Radio Group](./docs/components/radio-group.md)
*   [Scroll Area](./docs/components/scroll-area.md)
*   [Select](./docs/components/select.md)
*   [Separator](./docs/components/separator.md)
*   [Sheet](./docs/components/sheet.md)
*   [Sidebar](./docs/components/sidebar.md)
*   [Skeleton](./docs/components/skeleton.md)
*   [Slider](./docs/components/slider.md)
*   [Switch](./docs/components/switch.md)
*   [Table](./docs/components/table.md)
*   [Tabs](./docs/components/tabs.md)
*   [Textarea](./docs/components/textarea.md)
*   [Toast](./docs/components/toast.md)
*   [Tooltip](./docs/components/tooltip.md)

## Publishing (for Library Maintainers)

When you make changes to this library, you need to publish a new version.

1.  **Build the Library:**

    This command compiles the TypeScript source into JavaScript and generates type definitions.

    ```bash
    npm run build
    ```

2.  **Update the Version:**

    Before publishing, you should update the version number in `package.json`. Use semantic versioning (`major.minor.patch`).

    ```bash
    # For a patch (e.g., bug fix)
    npm version patch

    # For a minor change (e.g., new component)
    npm version minor

    # For a major change (e.g., breaking changes)
    npm version major
    ```

3.  **Publish to the Registry:**

    Ensure you are logged in to the correct NPM registry first.

    ```bash
    npm publish
    ```

4.  **Push Git Tags:**

    The `npm version` command creates a new git tag. Push it to the repository.

    ```bash
    git push --tags
    ```