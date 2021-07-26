import axios from "axios";
const BASE_URL = "http://localhost:8888/";

const api = {
  call() {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
export default api;
