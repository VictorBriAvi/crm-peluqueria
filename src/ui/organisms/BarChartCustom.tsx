"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";

interface BarChartCustomProps {
  title: string;
  data: { [key: string]: string | number }[];
  colors?: string[];
  dataKeyName?: string;
  dataKeyValue?: string;
  height?: number;
}

const defaultColors = [
  "#3b82f6", // azul
  "#10b981", // verde
  "#f59e0b", // amarillo
  "#ef4444", // rojo
  "#8b5cf6", // violeta
  "#ec4899", // rosa
  "#14b8a6", // turquesa
];

export default function BarChartCustom({
  title,
  data,
  colors = defaultColors,
  dataKeyName = "name",
  dataKeyValue = "value",
  height = 350,
}: BarChartCustomProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">{title}</h2>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey={dataKeyName} tick={{ fill: "#374151" }} />
          <YAxis tick={{ fill: "#374151" }} />
          <Tooltip
            formatter={(value: number) => `$${value.toLocaleString("es-AR")}`}
            labelStyle={{ color: "#111827" }}
            contentStyle={{ borderRadius: "10px" }}
          />
          <Bar dataKey={dataKeyValue} radius={[8, 8, 0, 0]}>
            
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
            <LabelList dataKey={dataKeyValue} position="top" fill="#374151" />

          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
