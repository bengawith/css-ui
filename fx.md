Thanks for the detailed context, Ben—this error is a classic TypeScript DTS build mismatch between JSX element types and their expected props. The key issue is here:

> `Type '{ ... }' is not assignable to type 'HTMLAttributes<HTMLDivElement>'`

And more specifically:

> `Type 'ClipboardEventHandler<HTMLButtonElement>' is not assignable to type ...`

This suggests that somewhere in your JSX you're rendering a `<div>` but passing it props intended for a `<button>`, likely in this block:

```tsx
const Comp = asChild ? "div" : "button";
return (
  <Comp
    className={...}
    {...props}
  />
);
```

### 🧠 What's Going Wrong
You're using a dynamic tag (`Comp`) that can be either `"div"` or `"button"`, but you're spreading `props` typed as `React.ButtonHTMLAttributes<HTMLButtonElement>` regardless of which tag is used. When `Comp` is `"div"`, TypeScript sees props like `onClick`, `formAction`, `disabled`, etc., and throws because those aren't valid for a `<div>`.

### ✅ How to Fix It

You have two solid options:

---

#### **Option 1: Narrow props based on `asChild`**
Split the logic so that props are only passed to the correct element type:

```tsx
export function SidebarMenuButton({ className, asChild, ...props }: SidebarMenuButtonProps) {
  const baseClass = cn(
    "flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 justify-start",
    className
  );

  if (asChild) {
    return <div className={baseClass}>{props.children}</div>;
  }

  return <button className={baseClass} {...props} />;
}
```

This avoids spreading button-only props onto a `<div>`.

---

#### **Option 2: Use `React.ElementType` and forwardRef**
If you want full flexibility (e.g. supporting custom components), refactor to use `as` prop and `forwardRef`:

```tsx
interface SidebarMenuButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  as?: React.ElementType;
}

export const SidebarMenuButton = React.forwardRef<
  HTMLElement,
  SidebarMenuButtonProps
>(({ as: Comp = 'button', className, ...props }, ref) => {
  return (
    <Comp
      ref={ref}
      className={cn(
        "flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 justify-start",
        className
      )}
      {...props}
    />
  );
});
```

This pattern is more scalable and avoids type mismatches by letting TypeScript infer the correct prop types based on the `as` component.

---

Let me know if you want to refactor the whole sidebar to use polymorphic components or if you’d prefer a stricter type-safe wrapper for `asChild`. I can help scaffold that too.
