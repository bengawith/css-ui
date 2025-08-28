# Calendar

The `Calendar` component is a date picker built on top of `react-day-picker`. It provides a customizable calendar interface for selecting dates.

## Installation

```bash
# No specific installation needed for individual components, as they are part of the UI library.
# Ensure you have `react-day-picker` and `lucide-react` installed in your project.
npm install react-day-picker lucide-react
# or
yarn add react-day-picker lucide-react
```

## Usage

```tsx
import { Calendar } from "@/components/ui/calendar";
import * as React from "react";

function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}
```

## Props

The `Calendar` component extends all props from `react-day-picker`. Additionally, it accepts the following props:

| Prop Name | Type | Description | Default |
|---|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the calendar container. | `""` |
| `classNames` | `object` | An object to override the default class names for various parts of the calendar. Refer to `react-day-picker` documentation for available keys. | `{}` |
| `showOutsideDays` | `boolean` | Whether to show days outside the current month. | `true` |

For a comprehensive list of props, please refer to the [react-day-picker documentation](https://react-day-picker.js.org/api/interfaces/DayPickerProps).

## Examples

### Single Date Selection

```tsx
import { Calendar } from "@/components/ui/calendar";
import * as React from "react";

function SingleDatePicker() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
}
```

### Multiple Date Selection

```tsx
import { Calendar } from "@/components/ui/calendar";
import * as React from "react";

function MultipleDatePicker() {
  const [dates, setDates] = React.useState<Date[] | undefined>();

  return (
    <Calendar
      mode="multiple"
      selected={dates}
      onSelect={setDates}
      className="rounded-md border"
    />
  );
}
```

### Range Selection

```tsx
import { Calendar } from "@/components/ui/calendar";
import * as React from "react";
import { DateRange } from "react-day-picker";

function RangeDatePicker() {
  const [range, setRange] = React.useState<DateRange | undefined>();

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      className="rounded-md border"
    />
  );
}
```