import axios from "axios";
import { BASEURL } from "../constants/baseUrl";

export default axios.create({
  baseURL: BASEURL,
});

export const axiosPrivate = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
