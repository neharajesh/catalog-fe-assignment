import { LineChart } from "@mantine/charts";
import { Card, Flex, SegmentedControl } from "@mantine/core";
import { useEffect, useState } from "react";
import { fetchCoinHistory } from "../../api";
import { CoinChartProps } from "./types";

export const CoinChart = ({ id, coin }: CoinChartProps) => {
  const [coinHistory, setCoinHistory] = useState<any>({});
  const [timeSelect, setTimeSelect] = useState<string>("3h");

  useEffect(() => {
    fetchCoinHistory(id || "", timeSelect).then((res: any) => {
      let result = res;
      result.history = result.history
        .map((obj: any) => {
          return { ...obj, price: parseFloat(obj.price) };
        })
        .filter((_: any, index: number) => index % 6 === 0);
      setCoinHistory(result);
    });
  }, [timeSelect]);

  const computeGraphDomain = () => {
    let currentHistory = coinHistory?.history.sort(
      (a: any, b: any) => a.price - b.price
    );
    let domain = [
      Math.floor(currentHistory[0].price),
      Math.ceil(currentHistory[currentHistory.length - 1].price),
    ];
    return domain;
  };
  return (
    <>
      <Card mt={24} withBorder w="100%" h="100%">
        {Object.keys(coinHistory).length && (
          <Card.Section withBorder p={24}>
            <Flex mb={20} justify="flex-end">
              <SegmentedControl
                value={timeSelect}
                onChange={setTimeSelect}
                data={[
                  { label: "3H", value: "3h" },
                  { label: "24H", value: "24h" },
                  { label: "7D", value: "7d" },
                  { label: "30D", value: "30d" },
                  { label: "3M", value: "3m" },
                  { label: "1Y", value: "1y" },
                  { label: "3Y", value: "3y" },
                  { label: "5Y", value: "5y" },
                ]}
              />
            </Flex>
            <LineChart
              h={500}
              data={coinHistory?.history}
              dataKey="timestamp"
              series={[{ name: "price" }]}
              curveType="linear"
              xAxisLabel="Date"
              yAxisLabel="Price"
              yAxisProps={{ domain: computeGraphDomain() }}
              valueFormatter={(value) => `${value} USD`}
              withDots={false}
              withXAxis={false}
              withYAxis={false}
              withTooltip={false}
              gridAxis="xy"
              referenceLines={[
                {
                  y: coin.price,
                  label: `Current Price: ${parseFloat(coin.price).toFixed(
                    2
                  )} USD`,
                  color: "black",
                },
                { x: "Mar 25", label: "Report out" },
              ]}
            />
          </Card.Section>
        )}
      </Card>
    </>
  );
};
