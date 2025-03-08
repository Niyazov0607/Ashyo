import axios from "axios";
import { API_BASE_URl } from "./envVariable";

export const apiClient = axios.create({
    baseURL: API_BASE_URl + "/api",
});
