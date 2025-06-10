import axios from "axios";
import { BASEURL } from "../constants/baseUrl";

export const instance = axios.create({
  baseURL: BASEURL,
});

export const axiosPrivate = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
