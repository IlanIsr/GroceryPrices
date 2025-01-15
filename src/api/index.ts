import { BRANCH_ENDPOINTS } from "./branches";
import { TableEndpoints } from "./index.type";
import { NEIGHBORHOOD_ENDPOINTS } from "./neighborhoods";
import { PRODUCT_LINE_ENDPOINTS } from "./productLines";
import { PRODUCT_ENDPOINTS } from "./products";
import { SUPMARKET_ENDPOINTS } from "./supermarkets";

export const AVAILABLE_ENDPOINTS: TableEndpoints[] = [
  BRANCH_ENDPOINTS,
  NEIGHBORHOOD_ENDPOINTS,
  SUPMARKET_ENDPOINTS,
  PRODUCT_ENDPOINTS,
  PRODUCT_LINE_ENDPOINTS,
];
