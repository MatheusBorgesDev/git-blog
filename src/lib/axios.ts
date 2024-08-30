import axios from "axios";

export const axiosGitHub = axios.create({
  baseURL: "https://api.github.com",
});
