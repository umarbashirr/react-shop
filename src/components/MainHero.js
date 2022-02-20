import React from "react";
import styled from "styled-components";
import { Container } from "../GlobalStyles";

const MainHero = () => {
  return (
    <Hero>
      <HeroTitle>Welcome to React Shop</HeroTitle>
    </Hero>
  );
};

export default MainHero;

const Hero = styled.div`
  padding: 100px 0;
  margin-top: 50px;
  background-color: #efefef;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 200px 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: 35px;
  color: #444;
`;
