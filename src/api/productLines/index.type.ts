type ProductLine = {
  id: number;
  product_id: number;
  branch_id: number;
  price: number;
};

type ProductLineOmitId = Omit<ProductLine, "id">;

export type { ProductLine as default, ProductLineOmitId };
