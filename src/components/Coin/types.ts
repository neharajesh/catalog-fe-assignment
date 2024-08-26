export type Coin = {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  links: {
    name: string;
    url: string;
    type: string;
  }[];
  supply?: {
    confirmed: boolean;
    supplyAt: number;
    max: string;
    total: string;
    circulating: string;
  };
  numberOfMarkets?: number;
  numberOfExchanges?: number;
  "24hVolume"?: string;
  marketCap?: string;
  fullyDilutedMarketCap?: string;
  price: string;
  btcPrice: string;
  priceAt: number;
  change: string;
  rank?: number;
  sparkline?: string[];
  allTimeHigh: {
    price: string;
    timestamp: number;
  };
  coinrankingUrl?: string;
  tier?: number;
  lowVolume?: boolean;
  listedAt?: number;
  hasContent?: boolean;
  tags?: string[];
};

export type CoinChartProps = {
  id?: string;
  coin: Coin;
};

export type CoinStatisticsProps = {
  coin: Coin;
};

export type CoinSummaryProps = {
  coin: Coin;
};
