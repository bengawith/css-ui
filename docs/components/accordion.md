# Accordion

The Accordion component provides a vertically stacked list of interactive headings that can be expanded or collapsed to reveal associated content. It's built on top of [Radix UI's Accordion primitive](https://www.radix-ui.com/primitives/docs/components/accordion) for accessibility and functionality, with Tailwind CSS for styling.

## Usage

To use the Accordion, import the main `Accordion` component along with its sub-components: `AccordionItem`, `AccordionTrigger`, and `AccordionContent`.

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@css-support-systems/ui";

function MyAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default Tailwind CSS styling.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default using CSS transitions.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default MyAccordion;
```

## Components

*   **`<Accordion />`**: The root component for the accordion. It manages the state of its items.
*   **`<AccordionItem />`**: Represents an individual accordion item. Requires a unique `value` prop.
*   **`<AccordionTrigger />`**: The interactive heading that toggles the visibility of the `AccordionContent`. It typically contains the title of the section.
*   **`<AccordionContent />`**: The collapsible content area associated with an `AccordionTrigger`.

## Props

All Accordion components (`Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`) inherit their props directly from their corresponding [Radix UI Accordion primitives](https://www.radix-ui.com/primitives/docs/components/accordion). In addition, they accept a `className` prop for applying custom Tailwind CSS classes.

For detailed information on available props, please refer to the [Radix UI Accordion Documentation](https://www.radix-ui.com/primitives/docs/components/accordion).
