import axios from 'axios';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: 'Bearer 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'
  }
})