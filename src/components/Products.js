import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Container, Section } from "../GlobalStyles";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from "../redux/product/productActions";
import SingleProductCard from "./SingleProductCard";

const Products = () => {
  const loading = useSelector((state) => state.allproducts.loading);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    dispatch(fetchProductsRequest());
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const products = await response.data;
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      dispatch(fetchProductsFailure());
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Section>
        <h1>Loading...</h1>
      </Section>
    );
  }

  return (
    <Section>
      <ProductGrid>
        <SingleProductCard />
      </ProductGrid>
    </Section>
  );
};

export default Products;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media screen and (max-width: 768px) {
    margin: 50px 0;
  }
`;
