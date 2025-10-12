import React, { useState, useEffect } from "react";
import * as S from "./HomePage.styles";
import { Product } from "../../types/api.types";
import { fetchProducts } from "../../utils/api";
import ProductCard from "../../components/ProductCard";

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("default");

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

  // Filter products by search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "name-asc":
        return a.title.localeCompare(b.title);
      case "name-desc":
        return b.title.localeCompare(a.title);
      case "price-asc":
        return a.discountedPrice - b.discountedPrice;
      case "price-desc":
        return b.discountedPrice - a.discountedPrice;
      default:
        return 0;
    }
  });

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

        <S.ControlsWrapper>
          <S.SearchWrapper>
            <S.SearchInput
              type="text"
              placeholder="🔍 Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search products"
            />
          </S.SearchWrapper>

          <S.SortWrapper>
            <S.SortSelect
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              aria-label="Sort products"
            >
              <option value="default">Sort by...</option>
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </S.SortSelect>
          </S.SortWrapper>
        </S.ControlsWrapper>

        <S.ResultsCount>
          Showing {sortedProducts.length} of {products.length} products
        </S.ResultsCount>
      </S.Header>

      <S.ProductGrid>
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <S.ErrorMessage>
            No products found matching "{searchQuery}"
          </S.ErrorMessage>
        )}
      </S.ProductGrid>
    </S.Container>
  );
}

export default HomePage;
