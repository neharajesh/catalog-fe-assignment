import { Anchor, Table, Text } from "@mantine/core";
import { CoinSummaryProps } from "./types";

export const CoinSummary = ({ coin }: CoinSummaryProps) => {
  return (
    <>
      <Text mb={20}>{coin.description} </Text>

      <Table mt={16} w="50%">
        <Table.Tbody>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Td>{coin.name}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Symbol</Table.Th>
            <Table.Td>{coin.symbol}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Tier</Table.Th>
            <Table.Td>{coin.tier}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Price</Table.Th>
            <Table.Td>
              USD {parseFloat(coin.price).toFixed(2)} on{" "}
              {new Date(coin.priceAt).toLocaleDateString("en-US")}
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>24h Volume</Table.Th>
            <Table.Td>{coin["24hVolume"]}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>BTC Price</Table.Th>
            <Table.Td>{coin.btcPrice}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Change</Table.Th>
            <Table.Td>{coin.change}</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Supply</Table.Th>
            <Table.Td>
              {coin.supply?.confirmed ? "Confirmed" : "Not Confirmed"},
              Circulating {coin.supply?.circulating}
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Th>Coin Ranking URL</Table.Th>
            <Table.Td>
              <Anchor size="sm" href={coin.coinrankingUrl}>
                {coin.coinrankingUrl}
              </Anchor>
            </Table.Td>
          </Table.Tr>
          {coin?.tags && (
            <Table.Tr>
              <Table.Th>Tags</Table.Th>
              <Table.Td>
                <Text tt="capitalize" size="sm">
                  {coin?.tags.join(", ")}
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </>
  );
};
