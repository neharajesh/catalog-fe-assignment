import axios from "axios";

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

export { fetchCoins };
