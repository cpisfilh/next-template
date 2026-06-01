import { Button } from "@/components/ui/button";
import { Table, RowData } from "@tanstack/react-table";

interface Props<TData> {
  table: Table<TData>
}

export const PaginationTable = <TData extends RowData>({ table }: Props<TData>) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mt-2 shrink-0">
      <div>
        Mostrando {table.getRowModel().rows?.length ?? 0} - {table.getRowModel().rows?.length ?? 0} de {table.getRowModel().rows?.length ?? 0} registros
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};
