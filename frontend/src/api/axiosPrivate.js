import axios from "axios";
import { BASEURL } from "../constants/baseUrl";

export const axiosInstance = axios.create({
  baseURL: BASEURL,
});

export const axiosPrivate = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
});
