"use client";

import {flexRender,getCoreRowModel,useReactTable,ColumnDef} from "@tanstack/react-table";

interface DataTableProps<T extends object> {

  data: T[];
  columns: ColumnDef<T, any>[];
  emptyMessage?: string;

}

export function DataTable<T extends object>({

  data,
  columns,
  emptyMessage = 'No hay datos disponibles.'

}: DataTableProps<T>) {

  const table = useReactTable({data,columns,getCoreRowModel: getCoreRowModel()});

  if (data.length === 0) {

    return (
      <div className="p-8 border border-dashed border-gray-200 rounded-lg text-gray-500 text-center">
        {emptyMessage}
      </div>
    );

  }

  return (

    <div className="overflow-x-auto  rounded-xl shadow-sm bg-white">

      <table className="min-w-full divide-y divide-gray-200 rounded-lg">

        <thead className="bg-gray-50">

          {table.getHeaderGroups().map(headerGroup => (

            <tr key={headerGroup.id}>

              {headerGroup.headers.map(header => (

                <th
                  key={header.id}
                  className="px-4 py-3 text-left text-sm font-semibold text-gray-700"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>

              ))}

            </tr>

          ))}

        </thead>

        <tbody className="bg-white divide-y divide-gray-100">

          {table.getRowModel().rows.map(row => (

            <tr key={row.id} className="hover:bg-gray-50 transition-colors">

              {row.getVisibleCells().map(cell => (

                <td

                  key={cell.id}
                  className={`px-4 py-3 text-sm ${
                    cell.column.id?.includes("porcentaje")
                      ? "text-blue-600 font-semibold text-right"
                      : cell.column.id?.includes("monto")
                      ? "text-right text-gray-700"
                      : "text-gray-800"

                  }`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}

                </td>

              ))}

            </tr>

          ))}
          
        </tbody>

      </table>

    </div>

  );
}
