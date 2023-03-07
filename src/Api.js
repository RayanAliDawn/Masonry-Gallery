import axios from "axios";
const BASE_URL = "https://api.unsplash.com/";
const CLIENT_ID = "kNwmpjKtvsNI2TxqU8kAykGaAiXNQ61bHFlZQcXCY1Q";

export const LoadImages = () => {
  return axios
    .get(`${BASE_URL}/photos`, {
      params: {
        client_id: CLIENT_ID,
        per_page: 50,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export const SearchImages = (query) => {
  return axios
    .get(`${BASE_URL}/search/photos`, {
      params: {
        client_id: CLIENT_ID,
        query: query,
        per_page: 50,
      },
    })
    .then((response) => {
      return response.data.results;
    });
};
