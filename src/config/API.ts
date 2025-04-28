import axios from "axios";
import Cookies from "js-cookie";
import { ENVIRONMENT } from "./environment";

export const API = axios.create({
  baseURL: ENVIRONMENT.API_URL,
});

API.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
