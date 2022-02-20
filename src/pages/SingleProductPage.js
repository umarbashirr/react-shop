import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Rating from "../components/Rating";
import { Section } from "../GlobalStyles";
import { addToCart } from "../redux/cart/cartActions";
import {
  fetchSingleProductsFailure,
  fetchSingleProductsRequest,
  fetchSingleProductsSuccess,
} from "../redux/product/productActions";

const SingleProductPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(
    (state) => state.allproducts.singleProductLoading
  );
  const { productId } = useParams();
  const fetchedProduct = useSelector((state) => state.allproducts.product);

  const fetchProduct = async (url) => {
    dispatch(fetchSingleProductsRequest());
    try {
      const response = await axios.get(`${url}/${productId}`);
      const product = await response.data;
      dispatch(fetchSingleProductsSuccess(product));
    } catch (error) {
      dispatch(fetchSingleProductsFailure());
    }
  };

  useEffect(() => {
    fetchProduct("https://fakestoreapi.com/products");
  }, [productId]);

  const { id, image, title, description, price, rating, category } =
    fetchedProduct;

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <Section>
      <BackButton to="/products">Back to Products</BackButton>
      {fetchedProduct && (
        <Row>
          <ImageWrapper>
            <img src={image} alt={title} />
          </ImageWrapper>
          <TextContent>
            <ProductCategory>{category}</ProductCategory>
            <Title>{title}</Title>
            {rating ? <Rating rating={rating} /> : " "}
            <Price>${price}</Price>
            <Desc>{description}</Desc>
            <div>
              <input type="number" />
              <button onClick={() => dispatch(addToCart(fetchedProduct))}>
                Add to Cart
              </button>
            </div>
          </TextContent>
        </Row>
      )}
    </Section>
  );
};

export default SingleProductPage;

const BackButton = styled(Link)`
  background-color: #444;
  color: #fff;
  border-radius: 4px;
  border: 1px solid transparent;
  padding: 0.5rem 1.2rem;
  display: inline-block;
`;

const Row = styled(Section)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  // align-items: center;
  // justify-content: center;

  img {
    object-fit: contain;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductCategory = styled.p`
  background-color: midnightblue;
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  align-self: flex-start;
  font-size: 12px;
  text-transform: capitalize;
`;

const Title = styled.h1`
  margin-bottom: 0.5rem;
`;

const Price = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const Desc = styled.p`
  text-align: justify;
  line-height: 2;
  margin-bottom: 1rem;
`;
