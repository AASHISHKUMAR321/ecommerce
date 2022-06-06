import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 50px;
  font-size: 20px;
  a {
    margin: auto;
    margin-left: 20%;
    margin-top: 40px;
  }
`;
export const Navbar = () => {
  return (
    <Nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/products"}>Products</Link>
    </Nav>
  );
};
