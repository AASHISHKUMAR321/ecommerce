import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MultipleSelectCheckmarks from "./Filter";
import BasicSelect from "./Sorting";
import axios from "axios";
import Card from "./Card";
import PaginationControlled from "./Pagination";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSearchParams, useParams } from "react-router-dom";

const HomeDiv = styled.div`
  width: 80%;
  height: 40px;

  margin: auto;
  #top {
    width: 50%;
    display: flex;
  }
  #Card {
    display: flex;

    flex-wrap: wrap;
    justify-content: space-around;
    gap: 30px;
    margin-top: 20px;
    cursor: pointer;
  }
`;
export const Home = () => {
  const [data, setdata] = useState();

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  console.log(page, data);

  useEffect(() => {
    axios({
      url: `http://localhost:2323/products`,
      method: "GET",
      params: { page },
    }).then((data) => setdata(data.data));
  }, [page]);

  // useEffect(() => {
  //   useSearchParams({ page });
  // }, [page, useSearchParams]);

  return (
    <HomeDiv>
      <div id="top">
        <MultipleSelectCheckmarks name={"Size"} menu={["S", "M", "L", "XL"]} />
        <MultipleSelectCheckmarks name={"Size"} menu={["S", "M", "L", "XL"]} />
        <BasicSelect
          name={"Sorting"}
          menu={["Price: High to Low ", "Price : Low to High"]}
        />
      </div>
      <div id="Card">
        {data != null
          ? data.product.map((e) => {
              return (
                <Card
                  title={e.title}
                  image={e.image}
                  price={e.price}
                  description={e.description}
                />
              );
            })
          : ""}
      </div>
      <Stack spacing={2}>
        <Pagination
          count={data ? data.count : 0}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </HomeDiv>
  );
};
