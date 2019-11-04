import axios from "axios";
import config from "../config";

export const login = () => {
  const url = `${config.conduitApi}/api/users/login`;
  const body = {
    user: { email: "tunglam20132208@gmail.com", password: "tunglam95" }
  };
  return axios.post(url, body).then(res => res.data);
};

export default { login };
