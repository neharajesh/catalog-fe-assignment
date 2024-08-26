import axios from "axios";

// should have been in a .env file, having issues with deployment, will deploy fix as soon as possible
const RAPID_API_KEY = "70a989e99cmsh683d876cae691b7p1941c2jsnefc250d4014f";
const RAPID_API_HOST = "coinranking1.p.rapidapi.com";

const fetchCoins = async () => {
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
      "x-rapidapi-key": RAPID_API_KEY,
      "x-rapidapi-host": RAPID_API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchCoin = async (id: string) => {
  const options = {
    method: "GET",
    url: `https://coinranking1.p.rapidapi.com/coin/${id}`,
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
    },
    headers: {
      "x-rapidapi-key": RAPID_API_KEY,
      "x-rapidapi-host": RAPID_API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchCoinHistory = async (id: string, timePeriod: string) => {
  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod,
    },
    headers: {
      "x-rapidapi-key": RAPID_API_KEY,
      "x-rapidapi-host": RAPID_API_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchCoins, fetchCoin, fetchCoinHistory };
