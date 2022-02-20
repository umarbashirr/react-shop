import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        max-width: 100%;
    }

    body {
        font-size: 1rem;
        line-height: 1.5;
        font-family: Arial, sans-serif;
        color: #444;
    }

    a {
        text-decoration: none;
    }

    a, button {
        pointer: cursor;
    }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding-inline: 30px;
  margin: auto;

  @media screen and (max-width: 768px) {
    padding-inline: 30px;
  }
`;

export const Section = styled.div`
  margin: 20px 0;

  @media screen and (min-width: 768px) {
    margin: 50px 0;
  }
`;

export default GlobalStyles;
