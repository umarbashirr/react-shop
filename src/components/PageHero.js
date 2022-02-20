import React from "react";
import styled from "styled-components";

const PageHero = ({ title }) => {
  return (
    <Hero>
      <HeroTitle>{title}</HeroTitle>
    </Hero>
  );
};

export default PageHero;

const Hero = styled.div`
  padding: 50px 0;
  margin-top: 50px;
  background-color: #efefef;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 100px 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: 35px;
  color: #444;
`;
