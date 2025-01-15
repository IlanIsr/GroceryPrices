type Product = {
  id: number;
  name: string;
  code: string;
};

type ProductOmitId = Omit<Product, "id">;

export type { Product , ProductOmitId };
