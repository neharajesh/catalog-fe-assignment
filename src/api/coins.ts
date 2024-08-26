import axios from "axios";

const BASE_URL = "https://coingecko.p.rapidapi.com/coins";
const API_HEADERS = {
  "x-rapidapi-key": process.env.RAPID_API_KEY,
  "x-rapidapi-host": process.env.RAPID_API_HOST,
};

const fetchCoinsList = async () => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/list`,
    API_HEADERS,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
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
    API_HEADERS,
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
    API_HEADERS,
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
    API_HEADERS,
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
    API_HEADERS,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
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
};
