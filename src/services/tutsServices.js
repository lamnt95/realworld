import axios from "axios";
import config from "../config";

const likeTut = (accessToken, slug) => {
  const url = `${config.conduitApi}/api/articles/${slug}/favorite`;
  const body = {};
  const headers = {
    Authorization: `Token ${accessToken}`
  };
  return axios.post(url, body, { headers });
};

export default { likeTut };
