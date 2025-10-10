import React, { useState, useEffect } from "react";
import * as S from "./HomePage.styles";
import { Product } from "../../types/api.types";
import { fetchProducts } from "../../utils/api";
import ProductCard from "../../components/ProductCard";

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const response = await fetchProducts();
        setProducts(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return (
      <S.Container>
        <S.LoadingWrapper>Loading products...</S.LoadingWrapper>
      </S.Container>
    );
  }

  if (error) {
    return (
      <S.Container>
        <S.ErrorWrapper>
          <S.ErrorTitle>Oops!</S.ErrorTitle>
          <S.ErrorMessage>{error}</S.ErrorMessage>
        </S.ErrorWrapper>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Welcome to Noroff Shop</S.Title>
        <S.Subtitle>Discover amazing products at great prices!</S.Subtitle>
        <S.ControlsPlaceholder>
          🔍 Search & Sort controls will go here (coming soon!)
        </S.ControlsPlaceholder>
      </S.Header>

      <S.ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ProductGrid>
    </S.Container>
  );
}

export default HomePage;
