import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSearchParams, useParams } from "react-router-dom";
import axios from "axios";

export default function PaginationControlled() {
  const [page, setPage] = useState(Number(useSearchParams("page") || 1));
  const handleChange = (event, value) => {
    setPage(value);
    console.log("pagimnation");
  };

  //   React.useEffect(() => {
  //     axios
  //       .get(`http://localhost:2323/products`, page)
  //       .then((data) => console.log(data));
  //   }, []);

  return (
    <Stack spacing={2}>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}
