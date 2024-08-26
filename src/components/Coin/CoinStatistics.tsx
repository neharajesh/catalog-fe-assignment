import { Table } from "@mantine/core";
import { CoinStatisticsProps } from "./types";

export const CoinStatistics = ({ coin }: CoinStatisticsProps) => {
  return (
    <Table mt={16} w="50%">
      <Table.Tbody>
        <Table.Tr>
          <Table.Th>Rank</Table.Th>
          <Table.Td>{coin.rank}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Th>All Time High</Table.Th>
          <Table.Td>
            USD {parseFloat(coin.allTimeHigh?.price).toFixed(2)}, On{" "}
            {new Date(coin.allTimeHigh.timestamp).toLocaleDateString("en-US")}
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Th>Fully Diluted Market Cap</Table.Th>
          <Table.Td>{coin.fullyDilutedMarketCap}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Th>Listed At</Table.Th>
          <Table.Td>{coin.listedAt}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Th>Market Cap</Table.Th>
          <Table.Td>{coin.marketCap}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Th>No. of exchanges</Table.Th>
          <Table.Td>{coin.numberOfExchanges}</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Th>No. of markets</Table.Th>
          <Table.Td>{coin.numberOfMarkets}</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
};
