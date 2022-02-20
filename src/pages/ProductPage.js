import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import { Section } from "../GlobalStyles";
import Products from "../components/Products";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const productCount = useSelector(
    (state) => state.allproducts.products.length
  );
  console.log(productCount);
  return (
    <>
      <PageHero title="Our Products" />
      <PageHead>
        <ResultCount>Showing Result : {productCount}</ResultCount>
      </PageHead>
      <Products />
    </>
  );
};

export default ProductPage;

const PageHead = styled(Section)`
  padding: 20px 0;
  display: flex;
  justify-content: flex-end;
`;

const ResultCount = styled.p`
  font-size: 1rem;
`;
