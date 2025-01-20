import api from "@/api/apiSettings";
import { ProductOmitId } from "../index.type";

const createProduct = async ({ name, code }: ProductOmitId) => {
  try {
    const response = await api.post("/products", {
      name,
      code,
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création du produit :", error);
    throw error;
  }
};

export { createProduct };
