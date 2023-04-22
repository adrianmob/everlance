import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
