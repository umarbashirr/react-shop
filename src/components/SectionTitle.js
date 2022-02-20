import React from "react";
import styled from "styled-components";

const SectionTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

export default SectionTitle;

const Title = styled.h2`
  text-align: center;
  color: #444;
  font-size: 1.4rem;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`;
