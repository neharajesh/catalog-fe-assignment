import axios from "axios";

const BASE_URL = "https://coingecko.p.rapidapi.com/coins";
const API_HEADERS = {
  "x-rapidapi-key": "70a989e99cmsh683d876cae691b7p1941c2jsnefc250d4014f",
  "x-rapidapi-host": "coingecko.p.rapidapi.com",
};

const fetchCoinsList = async () => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/list`,
    headers: {
      "x-rapidapi-key": "70a989e99cmsh683d876cae691b7p1941c2jsnefc250d4014f",
      "x-rapidapi-host": "coingecko.p.rapidapi.com",
    },
    params: {
      limit: 10,
    },
  };

  try {
    console.log("here");
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error({ error });
  }
};

const fetchCoinMarkerts = async () => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/markets`,
    params: {
      page: "1",
      sparkline: "false",
      vs_currency: "usd",
      per_page: "100",
      order: "market_cap_desc",
    },
    headers: API_HEADERS,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchCoin = async (id: any) => {
  const options = {
    method: "GET",
    url: `$BASE_URL{/${id}`,
    params: {
      localization: "true",
      tickers: "true",
      market_data: "true",
      community_data: "true",
      developer_data: "true",
      sparkline: "false",
    },
    headers: API_HEADERS,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchCoinMarketChart = async (id: any) => {
  const options = {
    method: "GET",
    url: `$BASE_URL{/${id}/market_chart`,
    headers: API_HEADERS,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchCoinMarketChartRange = async (
  id: any,
  from: any,
  to: any,
  currency: string
) => {
  const options = {
    method: "GET",
    url: `$BASE_URL{/${id}/market_chart/range`,
    params: {
      from,
      vs_currency: currency,
      to,
    },
    headers: API_HEADERS,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchCoins1 = async () => {
  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      tiers: "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "50",
      offset: "0",
    },
    headers: {
      "x-rapidapi-key": "70a989e99cmsh683d876cae691b7p1941c2jsnefc250d4014f",
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export {
  fetchCoinsList,
  fetchCoinMarkerts,
  fetchCoin,
  fetchCoinMarketChart,
  fetchCoinMarketChartRange,

  // new mock api
  fetchCoins1,
};
