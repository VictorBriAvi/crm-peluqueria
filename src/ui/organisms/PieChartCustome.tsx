"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface PieChartCardProps {
  title: string;
  data: { name: string; value: number }[];
  colors?: string[];
  height?: number;
  isAnimationActive?: boolean;
}

export default function PieChartCustomer({

  title = "Distribución de Gastos",
  data,
  colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"],
  height = 350,
  isAnimationActive = true,

}: PieChartCardProps) {

  return (

    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-center h-full">
        
      <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
        {title}
      </h2>

      <ResponsiveContainer width="100%" height={height}>

        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={120}
            paddingAngle={4}
            dataKey="value"
            isAnimationActive={isAnimationActive}
            cornerRadius={8}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}

          </Pie>

          <Tooltip

            formatter={(value: number) => `$${value.toLocaleString("es-AR")}`}
            contentStyle={{
              borderRadius: "10px",
              borderColor: "#e5e7eb",
              backgroundColor: "#fff",
            }}

          />
          <Legend verticalAlign="bottom" height={36} />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}
