type Supermarket = {
  id: number;
  name: string;
};
type SupermarketOmitId = Omit<Supermarket, "id">;

export type { Supermarket, SupermarketOmitId };
