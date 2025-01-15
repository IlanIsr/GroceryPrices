import { fetchAllSupermarkets } from "./getSupermarkets";
import { fetchSupermarketById } from "./getSupermarketById";
import { createSupermarket } from "./createSupermarket";
import { updateSupermarket } from "./updateSupermarket";
import { deleteSupermarket } from "./deleteSupermarket";

type Supermarket = {
  id: number;
  name: string;
};
type SupermarketOmitId = Omit<Supermarket, "id">;

export {
  fetchAllSupermarkets,
  fetchSupermarketById,
  createSupermarket,
  updateSupermarket,
  deleteSupermarket,
};
export type { Supermarket, SupermarketOmitId };
