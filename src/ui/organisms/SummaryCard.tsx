"use client";

import { DollarSign, Briefcase, Wallet } from "lucide-react";
import { ReactNode } from "react";

interface SummaryCardProps{
  title: string;
  amount: string | number;
  amountColor?: string;
  leftIcon: ReactNode;
  leftLabel: string;
  rightIcon: ReactNode;
  rightLabel: string;
}



export default function SummaryCard( { title, amount, amountColor = "text-gray-800", leftIcon, leftLabel, rightIcon, rightLabel} : SummaryCardProps ) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between h-full">
      {/* Título */}
      <h2 className="text-gray-600 font-semibold text-lg mb-2">{title}</h2>

      {/* Monto principal */}
      <div className={`text-4xl font-bold mb-6 ${amountColor}`}>{amount}</div>

      {/* Indicadores inferiores */}
      <div className="flex items-center justify-between text-gray-600">
        <div className="flex items-center gap-2">
          {leftIcon}
          <span className="text-sm font-medium">{leftLabel}</span>
        </div>

        <div className="flex items-center gap-2">
          {rightIcon}
          <span className="text-sm font-medium">{rightLabel}</span>
        </div>
      </div>
    </div>
  );
}