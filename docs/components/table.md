# Table

The `Table` component provides a set of styled components for displaying tabular data. It includes components for the table itself, header, body, footer, rows, cells, and captions, ensuring a consistent and accessible table structure.

## Usage

```tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

## Components and Props

All `Table` sub-components accept standard HTML attributes for their respective underlying elements.

### `Table`

The main container for the table.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the table element. |
| `...props` | `React.HTMLAttributes<HTMLTableElement>` | Standard HTML `<table>` attributes. |

### `TableHeader`

The table header group.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the `<thead>` element. |
| `...props` | `React.HTMLAttributes<HTMLTableSectionElement>` | Standard HTML `<thead>` attributes. |

### `TableBody`

The table body group.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the `<tbody>` element. |
| `...props` | `React.HTMLAttributes<HTMLTableSectionElement>` | Standard HTML `<tbody>` attributes. |

### `TableFooter`

The table footer group.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the `<tfoot>` element. |
| `...props` | `React.HTMLAttributes<HTMLTableSectionElement>` | Standard HTML `<tfoot>` attributes. |

### `TableRow`

A table row.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the `<tr>` element. |
| `...props` | `React.HTMLAttributes<HTMLTableRowElement>` | Standard HTML `<tr>` attributes. |

### `TableHead`

A table header cell.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the `<th>` element. |
| `...props` | `React.ThHTMLAttributes<HTMLTableCellElement>` | Standard HTML `<th>` attributes. |

### `TableCell`

A table data cell.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the `<td>` element. |
| `...props` | `React.TdHTMLAttributes<HTMLTableCellElement>` | Standard HTML `<td>` attributes. |

### `TableCaption`

A caption for the table.

| Prop Name | Type | Description |
|---|---|---|
| `className` | `string` | Additional CSS classes to apply to the `<caption>` element. |
| `...props` | `React.HTMLAttributes<HTMLTableCaptionElement>` | Standard HTML `<caption>` attributes. |

## Examples

### Basic Table

```tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function BasicTableExample() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>City</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>30</TableCell>
          <TableCell>New York</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>25</TableCell>
          <TableCell>Los Angeles</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```