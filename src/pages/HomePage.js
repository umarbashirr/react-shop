import React, { Fragment } from "react";
import MainHero from "../components/MainHero";
import Products from "../components/Products";

const HomePage = () => {
  return (
    <Fragment>
      <MainHero />
      <Products />
    </Fragment>
  );
};

export default HomePage;
