import BalanceGrid from "./components/BalanceGrid";
import CardBalance from "../../ui/organisms/SummaryCard";

import GastosStats from "./components/Payment";
import PorcentajeEmpleados from "./components/PorcentEmployee";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <BalanceGrid />
      <PorcentajeEmpleados />
    </main>
  );
}
