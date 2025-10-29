import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from "recharts";

interface LineChartCustomProps {
  title: string;
  data: { [key: string]: string | number }[];
  lines: string[]; // nombres de las series (ej: ["ingresos", "gastos"])
  colors?: string[];
  height?: number;
  formatter?: (value: number) => string;
}

const defaultColors = [
  "#3b82f6", // azul
  "#10b981", // verde
  "#ef4444", // rojo
  "#f59e0b", // amarillo
  "#8b5cf6", // violeta
  "#ec4899", // rosa
  "#14b8a6", // turquesa
];

export default function LineChartCustom({

  title,
  data,
  lines,
  colors = defaultColors,
  height = 350,
  formatter = (value) => `$${value.toLocaleString("es-AR")}`,

}: LineChartCustomProps) {

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-xl font-semibold text-gray-700 mb-6">{title}</h2>

      <ResponsiveContainer width="100%" height={height}>

        <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>

          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

          <XAxis dataKey="name" tick={{ fill: "#374151" }} />

          <YAxis tick={{ fill: "#374151" }} />

          <Tooltip
            formatter={(value: number) => formatter(value)}
            labelStyle={{ color: "#111827" }}
            contentStyle={{ borderRadius: "10px" }}
          />

          <Legend />

          {lines.map((lineKey, index) => (
            <Line
              key={lineKey}
              type="monotone"
              dataKey={lineKey}
              stroke={colors[index % colors.length]}
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          ))}

        </LineChart>

      </ResponsiveContainer>
    </div>
  );
}