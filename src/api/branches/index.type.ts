type Branch = {
  address: string;
  id: number;
  neighborhood_id: number;
  supermarket_id: number;
};

type BranchOmitId = Omit<Branch, "id">;

export type { Branch, BranchOmitId };
