// src/features/sales/hooks/useSales.ts
import { useQuery } from "@tanstack/react-query";
import { getSales } from "@/data/repositories/salesRepository";

export const useSales = () =>
  useQuery({
    queryKey: ["sales"], // 🔹 clave única del query
    queryFn: getSales,   // 🔹 función que obtiene los datos
  });
