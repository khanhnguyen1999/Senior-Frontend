import { api } from "./index";

const usersService = {
  data({ limit, offset }) {
    return api.call().get(`/data?limit=${limit}&offset=${offset}`);
  },
};

export default usersService;
