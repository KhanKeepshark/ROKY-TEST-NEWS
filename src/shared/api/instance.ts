import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://content.guardianapis.com/',
});

export const DetailPageApi = {
  async getPage(newsId: string) {
    const { data } = await api.get(newsId, {
      params: {
        'show-fields': 'all',
        'api-key': process.env.API_KEY,
      },
    });
    return data.response.content;
  },
};
