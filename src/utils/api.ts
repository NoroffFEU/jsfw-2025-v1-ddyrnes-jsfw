import { ProductsResponse, SingleProductResponse } from "../types/api.types";

const API_BASE_URL = "https://v2.api.noroff.dev/online-shop";

export async function fetchProducts(): Promise<ProductsResponse> {
  try {
    const response = await fetch(API_BASE_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const data: ProductsResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function fetchProductById(
  id: string
): Promise<SingleProductResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.statusText}`);
    }

    const data: SingleProductResponse = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
}
