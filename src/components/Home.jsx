import React from "react";
import styled from "styled-components";
import MultipleSelectCheckmarks from "./Filter";
import BasicSelect from "./Sorting";

const HomeDiv = styled.div`
  width: 80%;
  height: 40px;

  margin: auto;
  div {
    width: 70%;
    display: flex;
  }
`;
export const Home = () => {
  return (
    <HomeDiv>
      <div>
        <MultipleSelectCheckmarks name={"Size"} menu={["S", "M", "L", "XL"]} />
        <MultipleSelectCheckmarks name={"Size"} menu={["S", "M", "L", "XL"]} />
        <BasicSelect name={"Sorting"} menu={["S", "M", "L", "XL"]} />
      </div>
    </HomeDiv>
  );
};
