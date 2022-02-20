import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SingleProductCard = () => {
  const products = useSelector((state) => state.allproducts.products);
  console.log(products);
  return (
    <>
      {products.map((product) => {
        const { id, title, price, image } = product;
        return (
          <ProductCard key={id}>
            <ImageContainer to={`/products/${id}`}>
              <img src={image} alt={title} />
            </ImageContainer>
            <ProductHeader>
              <ProductName>{title}</ProductName>
              <ProductPrice>${price}</ProductPrice>
            </ProductHeader>
            <CartButton>Add to Cart</CartButton>
          </ProductCard>
        );
      })}
    </>
  );
};

export default SingleProductCard;

const ProductCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #efefef;
  padding: 1rem;
`;

const ImageContainer = styled(Link)`
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  height: 300px;
  object-fit: cover;

  img {
    object-fit: contain;
  }
`;

const ProductHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 1rem;
`;

const ProductPrice = styled.h4`
  font-size: 1rem;
`;

const ProductName = styled.h3`
  font-size: 1rem;
`;

const CartButton = styled.button`
  background-color: midnightblue;
  color: #fff;
  border: 1px solid transparent;
  outline: none;
  padding: 0.5rem 1.2rem;
  border-radius: 4px;
`;
