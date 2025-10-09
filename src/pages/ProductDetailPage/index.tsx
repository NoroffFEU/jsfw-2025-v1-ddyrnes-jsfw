import React from "react";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {id}</p>
      <p>Product details will be displayed here.</p>
    </div>
  );
}

export default ProductDetailPage;
