import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

// Adjusted Meeting type to match the expected structure
export type Meeting = {
  id: string;
  title: string;
  date: Date;
  status: string; // changed from "pending" | "update" | "approved" to just string
  email: string;
  // Removed amount field
};

export const columns: ColumnDef<Meeting>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      )
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
        accessorKey: "date",
        header: "Date Requested",
        cell: ({ getValue }) => {
          const dateValue = getValue();
          // Check if the dateValue is a Date object and format it
          return dateValue instanceof Date ? dateValue.toLocaleDateString() : dateValue;
        },
        }, 
    ];