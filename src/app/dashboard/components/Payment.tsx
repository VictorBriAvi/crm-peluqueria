"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Alquiler", value: 35000 },
  { name: "Insumos", value: 15000 },
  { name: "Servicios", value: 10000 },
  { name: "Publicidad", value: 5000 },
  { name: "Otros", value: 8000 },
];

const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function GastosStats() {
  return (
    <section className="w-full grid grid-cols-12 gap-8 items-center my-10">
      {/* 🧾 Columna izquierda - Texto */}
      <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-start gap-4 px-4">
        <h2 className="text-3xl font-bold text-gray-800">
          Distribución de Gastos
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Este gráfico muestra la proporción de los principales tipos de gastos
          del negocio. Te permite visualizar rápidamente qué áreas consumen
          más presupuesto y dónde podrías optimizar los recursos.
        </p>
        <p className="text-sm text-gray-500 italic">
          Datos estimados para el mes actual.
        </p>
      </div>

      {/* 📊 Columna derecha - Gráfica */}
      <div className="col-span-12 md:col-span-6 flex justify-center items-center">
        <div className="w-full h-80">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(25 * 100).toFixed(1)}%`
                }
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => `$${value.toLocaleString("es-AR")}`}
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
