import api from "@/utils/api";
import ProductLine from "../index.type";

// Fonction pour récupérer un product par son ID
const fetchProductLineById = async (id: number): Promise<ProductLine> => {
  try {
    const response = await api.get<ProductLine>(`/product-lines/${id}`); // Typage de la réponse
    return response.data; // Retourne le product
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de le product avec l'ID ${id} :`,
      error
    );
    throw error; // Vous pouvez propager l'erreur si besoin
  }
};

export { fetchProductLineById };
