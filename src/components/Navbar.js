import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">Navbar</Logo>
      <Navigation>
        <NavLink to="/products">Shop</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </Navigation>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background-color: midnightblue;
  padding: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
`;
