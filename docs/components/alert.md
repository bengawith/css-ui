# Alert

The Alert component is used to display important messages to the user. It supports different visual variants to convey different levels of urgency or information. It leverages `class-variance-authority` for flexible styling.

## Usage

To use the Alert, import the `Alert` component along with `AlertTitle` and `AlertDescription`.

```tsx
import { Alert, AlertTitle, AlertDescription } from "@css-support-systems/ui";

function MyAlert() {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}

function MyDestructiveAlert() {
  return (
    <Alert variant="destructive">
      <AlertTitle>Error!</AlertTitle>
      <AlertDescription>
        Your account has been suspended.
      </AlertDescription>
    </Alert>
  );
}

export default MyAlert;
```

## Components

*   **`<Alert />`**: The main container for the alert message.
*   **`<AlertTitle />`**: The title or heading of the alert.
*   **`<AlertDescription />`**: The main content or detailed message of the alert.

## Props

### `Alert` Component Props

In addition to standard `HTMLDivElement` attributes, the `Alert` component accepts the following `variant` prop:

| Prop      | Type                     | Default   | Description                               |
| :-------- | :----------------------- | :-------- | :---------------------------------------- |
| `variant` | `"default" \| "destructive"` | `"default"` | Defines the visual style of the alert.    |

### `AlertTitle` and `AlertDescription` Component Props

These components accept standard HTML attributes for `HTMLHeadingElement` and `HTMLParagraphElement` respectively, along with a `className` prop for custom styling.
