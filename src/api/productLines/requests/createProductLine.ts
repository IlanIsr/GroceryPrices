import api from "@/api/apiSettings";
import { ProductLineOmitId } from "../index.type";

const createProductLine = async ({
  product_id,
  branch_id,
  price,
}: ProductLineOmitId) => {
  try {
    const response = await api.post("/product-lines", {
      product_id,
      branch_id,
      price,
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création du produit :", error);
    throw error;
  }
};

export { createProductLine };
