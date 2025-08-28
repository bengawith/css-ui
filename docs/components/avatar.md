# Avatar

The Avatar component is used to display a user's profile picture, initials, or a generic placeholder. It's built on top of [Radix UI's Avatar primitive](https://www.radix-ui.com/primitives/docs/components/avatar) for accessibility and functionality, with Tailwind CSS for styling.

## Usage

To use the Avatar, import the main `Avatar` component along with its sub-components: `AvatarImage` and `AvatarFallback`.

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@css-support-systems/ui";

function MyAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

function MyAvatarWithInitials() {
  return (
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
}

export default MyAvatar;
```

## Components

*   **`<Avatar />`**: The root component for the avatar. It acts as a container for the image or fallback.
*   **`<AvatarImage />`**: Renders the actual image for the avatar. It accepts standard `<img>` props.
*   **`<AvatarFallback />`**: Renders a fallback (e.g., initials or an icon) when the image fails to load or is not provided. It accepts standard `<div>` props.

## Props

All Avatar components (`Avatar`, `AvatarImage`, `AvatarFallback`) inherit their props directly from their corresponding [Radix UI Avatar primitives](https://www.radix-ui.com/primitives/docs/components/avatar). In addition, they accept a `className` prop for applying custom Tailwind CSS classes.

For detailed information on available props, please refer to the [Radix UI Avatar Documentation](https://www.radix-ui.com/primitives/docs/components/avatar).
