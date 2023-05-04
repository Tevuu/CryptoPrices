import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Coinlist } from "./Coinlist";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import Button from "react-bootstrap/Button";

async function fetchCoins(skip = 0) {
  const { data } = await axios.get(
    `https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=10`
  );
  return data.coins;
}

function App() {
  const [page, setPage] = React.useState(0);
  const { data, isLoading, isError } = useQuery(
    ["coins", page],
    () => fetchCoins(page),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return (
      <div class="mx-auto">
        <h3 class="display-1 text-center">Loading. . . </h3>
      </div>
    );
  }
  if (isError) {
    return <h3 class="text-center display-1">Error. </h3>;
  }
  if (!data) {
    return <h3 class="text-center display-1">Нет данных </h3>;
  }
  return (
    <Container style={{ marginTop: 30, maxWidth: 700 }}>
      <h1 class="text-center pb-4">Crypto Fedorov</h1>
      <Coinlist data={data} />
      <div class="text-center">
        <Button
          class="p-2 bg-light border"
          onClick={() => setPage((p) => p - 10)}
          disabled={!page}>
          Назад
        </Button>
        <Button
          class="p-2 bg-light border"
          onClick={() => setPage((p) => p + 10)}>
          {" "}
          Вперед
        </Button>
      </div>
    </Container>
  );
}

export default App;
