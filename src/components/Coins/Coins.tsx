import { useEffect, useState } from "react";
import { fetchCoins } from "../../api";
import { Button, LoadingOverlay, Table, Title } from "@mantine/core";
import { CoinType1 } from "./types";
import { Navigate } from "react-router-dom";

const initialCoinsData: CoinType1 = {
  stats: {
    total: 0,
    total24hVolume: "",
    totalCoins: 0,
    totalExchanges: 0,
    totalMarketCap: "",
    totalMarkets: 0,
  },
  coins: [
    {
      uuid: "",
      symbol: "",
      name: "",
      color: "",
      iconUrl: "",
      marketCap: "",
      price: "",
      listedAt: 0,
      tier: 0,
      change: "",
      rank: 0,
      lowVolume: false,
      coinrankingUrl: "",
      "24hVolume": "",
      btcPrice: "",
    },
  ],
};

export const Coins = () => {
  const [coins, setCoins] = useState<CoinType1>(initialCoinsData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchCoins().then((res) => {
      console.log({ res });
      setCoins(res);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Title order={2}>Coins</Title>
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />

      {Object.keys(coins).length > 0 && (
        <>
          <p>Count: {coins?.stats && coins?.stats?.total} </p>

          {coins && (
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>No.</Table.Th>
                  <Table.Th>Coin Name</Table.Th>
                  <Table.Th>Symbol</Table.Th>
                  <Table.Th>Price (in USD) </Table.Th>
                  <Table.Th>Action</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {coins?.coins &&
                  coins?.coins.map((coin, index) => (
                    <Table.Tr key={coin.uuid}>
                      <Table.Td>{index + 1}</Table.Td>
                      <Table.Td>{coin.name}</Table.Td>
                      <Table.Td>{coin.symbol}</Table.Td>
                      <Table.Td>{parseFloat(coin.price).toFixed(2)}</Table.Td>
                      <Table.Td>
                        <Button>
                          <Navigate to={`/coins/${coin.uuid}`} />
                          View
                        </Button>
                      </Table.Td>
                    </Table.Tr>
                  ))}
              </Table.Tbody>
            </Table>
          )}
        </>
      )}
    </>
  );
};
