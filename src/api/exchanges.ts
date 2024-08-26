import axios from "axios";

const BASE_URL = "https://coingecko.p.rapidapi.com/exchanges";
const API_HEADERS = {
  "x-rapidapi-key": process.env.RAPID_API_KEY,
  "x-rapidapi-host": process.env.RAPID_API_HOST,
};

const fetchExchanges = async () => {
  const options = {
    method: "GET",
    url: `${BASE_URL}`,
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

const fetchExchangeById = async (id: any) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/${id}`,
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

const fetchExchangesList = async () => {
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

const fetchExchangeTickets = async (id: any) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/${id}/tickers`,
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

const fetchExchangeStatusUpdate = async (id: any) => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/${id}/status_updates`,
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
  fetchExchanges,
  fetchExchangesList,
  fetchExchangeById,
  fetchExchangeTickets,
  fetchExchangeStatusUpdate,
};
