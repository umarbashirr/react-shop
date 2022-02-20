import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Rating from "../components/Rating";
import { Section } from "../GlobalStyles";
import {
  fetchSingleProductsFailure,
  fetchSingleProductsRequest,
  fetchSingleProductsSuccess,
} from "../redux/product/productActions";

const SingleProductPage = () => {
  const loading = useSelector(
    (state) => state.allproducts.singleProductLoading
  );
  const { productId } = useParams();
  const dispatch = useDispatch();
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

  const {
    id,
    image,
    title,
    description,
    price,
    rating: { rate, count },
  } = fetchedProduct;

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <Section>
      <BackButton to="/products">Back to Products</BackButton>
      <Row>
        <ImageWrapper>
          <img src={image} alt="" />
        </ImageWrapper>
        <TextContent>
          <Title>{title}</Title>
          <Rating rate={rate} count={count} />
          <Price>${price}</Price>
          <Desc>{description}</Desc>
          <div>
            <input type="number" />
            <button>Add to Cart</button>
          </div>
        </TextContent>
      </Row>
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
  gap: 1.5rem;
`;

const Title = styled.h1``;

const Price = styled.p`
  font-size: 1.5rem;
`;

const Desc = styled.p`
  text-align: justify;
  line-height: 2;
`;
