import axios from "axios";
import { IApi } from "../types";

const API_URL = "https://data.techart.ru/lab/json/";

class ApiService {
   request(params: IApi) {
    return axios.get(API_URL, { params: params });
  }
}

export default new ApiService();
