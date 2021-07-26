import { parseJwt } from "./index";

const keyToken = "ACCESS_TOKEN";
const Storage = {
  removeToken() {
    localStorage.removeItem(keyToken);
  },
  setToken(token) {
    localStorage.setItem(keyToken, token);
  },
  getToken() {
    const token = localStorage.getItem(keyToken);
    try {
      const parseObj = parseJwt(token);
      if (parseObj) {
        return {
          token,
        };
      }
      return "";
    } catch (e) {
      return "";
    }
  },
  parseToken() {
    const token = localStorage.getItem(keyToken);
    return parseJwt(token);
  },
};
export default Storage;
