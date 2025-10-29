import { axiosClient } from "@/lib/axiosClient";
import type { Sale } from "@/core/models/Sale";

export const getSales = async (): Promise<Sale[]> => {
  const { data } = await axiosClient.get("/sales");
  return data;
};
