"use client";

import { DataTable } from "@/ui/molecules/Datatable";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";

type Resultado = {
  nombre: string;
  monto: number;
  porcentaje: number;
};

export default function PorcentajeEmpleados() {
  const [dataResult, setData] = useState<Resultado[]>([]);
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");

  const empleados = [
    { nombre: "Vanesa", monto: 85000 },
    { nombre: "Jesica", monto: 72000 },
    { nombre: "Johana", monto: 91000 },
    { nombre: "Patricio", monto: 64000 },
    { nombre: "Monica", monto: 78000 },
  ];

  // 📊 Definimos las columnas para la tabla genérica
  const columns: ColumnDef<Resultado>[] = [
    { accessorKey: "nombre", header: "Empleado" },
    {
      accessorKey: "monto",
      header: "Monto ($)",
      cell: (info) => `$${info.getValue().toLocaleString("es-AR")}`,
    },
    {
      accessorKey: "porcentaje",
      header: "% del total",
      cell: (info) => `${info.getValue()}%`,
    },
  ];

  // ⚙️ Lógica para calcular porcentajes simulados
  const handleObtenerPorcentaje = () => {
    if (!fechaDesde || !fechaHasta) {
      alert("Por favor seleccioná ambas fechas (Desde y Hasta).");
      return;
    }

    const total = empleados.reduce((acc, e) => acc + e.monto, 0);

    const resultados = empleados.map((e) => {
      const factor = 0.9 + Math.random() * 0.2;
      const monto = Math.round(e.monto * factor);
      return {
        nombre: e.nombre,
        monto,
        porcentaje: parseFloat(((monto / total) * 100).toFixed(2)),
      };
    });

    setData(resultados);
  };

  return (
    <section className="mt-8">
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Porcentaje de servicios por empleado
        </h2>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-12 gap-10 items-start">
          {/* 🔹 IZQUIERDA: Tabla */}
          <div className="col-span-12 md:col-span-8">
            <DataTable<Resultado>
              data={dataResult}
              columns={columns}
              emptyMessage="No hay datos aún. Seleccioná un rango de fechas y presioná 'Obtener porcentaje'."
            />
          </div>

          {/* 🔹 DERECHA: filtros, botón y resumen */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-6">
            {/* Filtros de fecha */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex flex-col w-full sm:w-1/2">
                <label
                  htmlFor="fechaDesde"
                  className="text-sm text-gray-600 font-medium mb-1"
                >
                  Desde
                </label>
                <input
                  id="fechaDesde"
                  type="date"
                  value={fechaDesde}
                  onChange={(e) => setFechaDesde(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-col w-full sm:w-1/2">
                <label
                  htmlFor="fechaHasta"
                  className="text-sm text-gray-600 font-medium mb-1"
                >
                  Hasta
                </label>
                <input
                  id="fechaHasta"
                  type="date"
                  value={fechaHasta}
                  onChange={(e) => setFechaHasta(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Botón de acción */}
            <button
              onClick={handleObtenerPorcentaje}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-all w-full sm:w-auto self-end"
            >
              Obtener porcentaje
            </button>

            {/* Descripción */}
            <p className="text-gray-600 text-sm">
              Calcula el porcentaje de participación de cada empleado dentro del
              rango de fechas seleccionado.
            </p>

            {/* Resumen total */}
            <div className="pt-4 border-t border-gray-100">
              <div className="text-sm text-gray-500">Total generado:</div>
              <div className="text-2xl font-bold text-gray-800">
                $
                {empleados
                  .reduce((a, b) => a + b.monto, 0)
                  .toLocaleString("es-AR")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
