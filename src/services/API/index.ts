import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "src/config";

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_URL,
  timeout: 180000,
  headers: {
    Accept: "application/json",
  },
};

export default axios.create(axiosConfig);
