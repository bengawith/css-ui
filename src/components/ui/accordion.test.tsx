import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion';
describe('Accordion', () => {
  it('renders and opens accordion to show content', () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(screen.getByText('Trigger')).toBeInTheDocument();
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
    // Open the accordion using fireEvent and act
    fireEvent.click(screen.getByText('Trigger'));
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
