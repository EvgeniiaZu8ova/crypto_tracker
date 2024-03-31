import axios from "axios";
import { apiBaseUrl } from "./constants";

export const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: { "Content-Type": "application/json" },
});
