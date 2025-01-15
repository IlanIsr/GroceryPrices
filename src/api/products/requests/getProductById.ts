import api from "@/utils/api";
import { Product } from "../index.type";

// Fonction pour récupérer un product par son ID
const fetchProductById = async (id: number): Promise<Product> => {
  try {
    const response = await api.get<Product>(`/products/${id}`); // Typage de la réponse
    return response.data; // Retourne le product
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de le product avec l'ID ${id} :`,
      error
    );
    throw error; // Vous pouvez propager l'erreur si besoin
  }
};

export { fetchProductById };
