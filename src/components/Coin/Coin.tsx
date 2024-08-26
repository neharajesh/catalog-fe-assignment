import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCoin } from "../../api";
import {
  Anchor,
  Breadcrumbs,
  Flex,
  LoadingOverlay,
  Pill,
  Tabs,
  Text,
  Title,
} from "@mantine/core";
import { Coin as CoinType } from "./types";
import { CoinStatistics } from "./CoinStatistics";
import { CoinSummary } from "./CoinSummary";
import { CoinChart } from "./CoinChart";
import {
  IconArrowBadgeDownFilled,
  IconArrowBadgeUpFilled,
} from "@tabler/icons-react";

const initialState = {
  uuid: "",
  symbol: "",
  name: "",
  description: "",
  color: "",
  iconUrl: "",
  websiteUrl: "",
  links: [],
  numberOfMarkets: 0,
  numberOfExchanges: 0,
  "24hVolume": "",
  marketCap: "",
  fullyDilutedMarketCap: "",
  price: "",
  btcPrice: "",
  priceAt: 0,
  change: "",
  rank: 0,
  coinrankingUrl: "",
  allTimeHigh: { price: "", timestamp: 0 },
};

export const Coin = () => {
  let params = useParams();

  const [coin, setCoin] = useState<CoinType>(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchCoin(params.id || "").then((res) => {
      setCoin(res.coin);
      setLoading(false);
    });
  }, []);

  const breadcrumbsItems = [
    {
      title: "Coins",
      href: "/coins",
    },
    {
      title: coin.name,
      href: `/coins/${coin.uuid}`,
    },
  ];

  return (
    <>
      <Breadcrumbs m={16}>
        {breadcrumbsItems.map((item, index) => (
          <Anchor href={item.href} key={index} size="sm">
            {item.title}
          </Anchor>
        ))}
      </Breadcrumbs>

      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />

      <Flex
        gap="md"
        justify="space-between"
        align="flex-start"
        direction="row"
        w="70%"
        px={16}
      >
        <Flex direction="column">
          <Title order={2}>{coin.name}</Title>
          <Flex gap={10} mt={8}>
            <Pill>{coin.symbol}</Pill>
            <Pill>Website ↗</Pill>
          </Flex>
        </Flex>

        <Flex align="last baseline" ml={50} gap={20}>
          <Text size="xl" fw={700} c="green.8">
            {parseFloat(coin.price).toFixed(2)} USD
          </Text>
          <Flex>
            <Text
              size="md"
              fw={700}
              c={parseFloat(coin.change) < 0 ? "red.6" : "lime.6"}
            >
              {parseFloat(coin.change) < 0 ? (
                <IconArrowBadgeDownFilled />
              ) : (
                <IconArrowBadgeUpFilled />
              )}
            </Text>
            <Text
              size="md"
              fw={700}
              c={parseFloat(coin.change) < 0 ? "red.6" : "lime.6"}
            >
              {parseFloat(coin.change)} today
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Tabs defaultValue="summary" mt={32}>
        <Tabs.List>
          <Tabs.Tab value="summary">Summary</Tabs.Tab>
          <Tabs.Tab value="chart">Chart</Tabs.Tab>
          <Tabs.Tab value="statistics">Statistics</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="summary" p={20}>
          <CoinSummary coin={coin} />
        </Tabs.Panel>

        <Tabs.Panel value="chart">
          <CoinChart coin={coin} id={params.id} />
        </Tabs.Panel>

        <Tabs.Panel value="statistics">
          <CoinStatistics coin={coin} />
        </Tabs.Panel>
      </Tabs>
    </>
  );
};
