import { api } from "./index";

const authService = {
  login({ username, password }) {
    return api.call().post("/auth", { username, password });
  },
};

export default authService;
