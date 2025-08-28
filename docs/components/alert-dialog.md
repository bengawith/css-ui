# Alert Dialog

The Alert Dialog component is a modal dialog that interrupts the user with important content and expects a response. It's built on top of [Radix UI's Alert Dialog primitive](https://www.radix-ui.com/primitives/docs/components/alert-dialog) for accessibility and functionality, with Tailwind CSS for styling.

## Usage

To use the Alert Dialog, import the main `AlertDialog` component along with its sub-components. A typical structure involves a `AlertDialogTrigger` to open the dialog, `AlertDialogContent` for the dialog's body, and `AlertDialogAction` or `AlertDialogCancel` for user interaction.

```tsx
import { 
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@css-support-systems/ui";

function MyAlertDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
}

export default MyAlertDialog;
```

## Components

*   **`<AlertDialog />`**: The root component for the alert dialog.
*   **`<AlertDialogTrigger />`**: The element that opens the alert dialog when clicked.
*   **`<AlertDialogPortal />`**: Renders its children into a new subtree outside of the current DOM hierarchy, typically at the end of `document.body`. This is important for proper layering and accessibility.
*   **`<AlertDialogOverlay />`**: A dimming layer that covers the rest of the page when the dialog is open, preventing interaction with elements outside the dialog.
*   **`<AlertDialogContent />`**: The main container for the dialog's content.
*   **`<AlertDialogHeader />`**: A wrapper for the title and description of the dialog.
*   **`<AlertDialogFooter />`**: A wrapper for the action and cancel buttons.
*   **`<AlertDialogTitle />`**: The title of the alert dialog.
*   **`<AlertDialogDescription />`**: The descriptive text of the alert dialog.
*   **`<AlertDialogAction />`**: A button that performs the primary action of the alert dialog. It uses the `buttonVariants` for styling.
*   **`<AlertDialogCancel />`**: A button that cancels the action and closes the alert dialog. It uses the `buttonVariants` with an `outline` variant for styling.

## Props

All Alert Dialog components inherit their props directly from their corresponding [Radix UI Alert Dialog primitives](https://www.radix-ui.com/primitives/docs/components/alert-dialog). In addition, they accept a `className` prop for applying custom Tailwind CSS classes.

For detailed information on available props, please refer to the [Radix UI Alert Dialog Documentation](https://www.radix-ui.com/primitives/docs/components/alert-dialog).
