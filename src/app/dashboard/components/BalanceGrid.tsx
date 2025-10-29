"use client";

import { Briefcase, ShoppingBag, TrendingUp, Wallet } from "lucide-react";
import CardBalance from "../../../ui/organisms/SummaryCard";
import BarChartCustom from "@/ui/organisms/BarChartCustom";
import LineChartCustom from "@/ui/organisms/LineChartCustom";
import PieChartCustomer from "@/ui/organisms/PieChartCustome";
import { ColumnDef } from "@tanstack/react-table";

const dataVentas = [
  { name: "Lunes", value: 45000 },
  { name: "Martes", value: 38000 },
  { name: "Miércoles", value: 52000 },
  { name: "Jueves", value: 61000 },
  { name: "Viernes", value: 72000 },
  { name: "Sábado", value: 5000 },
  { name: "Domingo", value: 88000 },
];

const data = [
  { name: "Lunes", ingresos: 12000, gastos: 8000 },
  { name: "Martes", ingresos: 15000, gastos: 9500 },
  { name: "Miércoles", ingresos: 13500, gastos: 7000 },
  { name: "Jueves", ingresos: 17000, gastos: 29999 },
  { name: "Viernes", ingresos: 20000, gastos: 11000 },
  { name: "Sábado", ingresos: 22000, gastos: 14000 },
  { name: "Domingo", ingresos: 18000, gastos: 9000 },
];


const dataGastos = [
  { name: "Productos e Insumos", value: 45000 },
  { name: "Sueldos", value: 120000 },
  { name: "Mantenimiento", value: 25000 },
  { name: "Servicios (Luz, Agua, Internet)", value: 18000 },
  { name: "Publicidad", value: 12000 },
];


type Pago = {
  empleado: string;
  totalVenta: number;
  porcentajePago: number;
  totalAPagar: number;
};

const columns: ColumnDef<Pago>[] = [
  { accessorKey: "empleado", header: "Empleado" },
  { accessorKey: "totalVenta", header: "Total Venta", cell: info => `$${info.getValue()}` },
  { accessorKey: "porcentajePago", header: "Porcentaje Pago", cell: info => `${info.getValue()}%` },
  { accessorKey: "totalAPagar", header: "Total a Pagar", cell: info => `$${info.getValue()}` },
];

export default function BalanceGrid() {
  return (
    <div className="p-6 space-y-6">
      {/* 🔹 Filtros de rango temporal */}
      <div className="flex flex-wrap justify-end items-center gap-3 mt-8 mb-6 pr-6">
        <button className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-sm border border-blue-600 hover:bg-blue-700 transition-all">
          Diaria
        </button>

        <button className="px-5 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg shadow-sm border border-gray-300 hover:bg-gray-100 transition-all">
          Semanal
        </button>

        <button className="px-5 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg shadow-sm border border-gray-300 hover:bg-gray-100 transition-all">
          Mensual
        </button>
      </div>

      {/* 🔹 Contenido principal del dashboard */}
      <div className="grid grid-cols-12 gap-6">
        {/* Tarjetas */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <CardBalance
            title="Total Balance"
            amount="$15.000"
            amountColor={"text-red-600"}
            leftIcon={<Briefcase size={18} className="text-blue-600" />}
            leftLabel="Servicio"
            rightIcon={<Wallet size={18} className="text-red-500" />}
            rightLabel="Gastos"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <CardBalance
            title="Ingresos"
            amount="$23.500"
            amountColor="text-blue-600"
            leftIcon={<TrendingUp size={18} className="text-green-500" />}
            leftLabel="Ventas"
            rightIcon={<ShoppingBag size={18} className="text-yellow-500" />}
            rightLabel="Compras"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <CardBalance
            title="Ingresos"
            amount="$23.500"
            amountColor="text-red-600"
            leftIcon={<TrendingUp size={18} className="text-green-500" />}
            leftLabel="Ventas"
            rightIcon={<ShoppingBag size={18} className="text-yellow-500" />}
            rightLabel="Compras"
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <CardBalance
            title="Ingresos"
            amount="$23.500"
            amountColor="text-red-600"
            leftIcon={<TrendingUp size={18} className="text-green-500" />}
            leftLabel="Ventas"
            rightIcon={<ShoppingBag size={18} className="text-yellow-500" />}
            rightLabel="Compras"
          />
        </div>

        {/* Panel izquierdo con 2 gráficas apiladas */}
        <div className="col-span-12 lg:col-span-8 grid grid-rows-2 gap-6">
          <div className="bg-white rounded-2xl  p-6">
            <LineChartCustom
              title="Evolución de ingresos y gastos"
              data={data}
              lines={["ingresos", "gastos"]}
              colors={["#10b981", "#ef4444"]}
            />
            
          </div>
          <div className="bg-white rounded-2xl  p-6">
            <BarChartCustom
              title="Ventas totales por día de la semana"
              data={dataVentas}
              colors={["#2563eb", "#16a34a", "#f97316", "#dc2626", "#9333ea"]}
              dataKeyName="name"
              dataKeyValue="value"
            />
            ;
          </div>
          
        </div>

        {/* Panel derecho con el Pie Chart */}
        <div className="col-span-12 lg:col-span-4">
    <PieChartCustomer
      title="Distribución de Gastos"
      data={dataGastos}
      colors={["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"]}
      isAnimationActive
    />
        </div>
      </div>
    </div>
  );
}
