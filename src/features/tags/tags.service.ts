import { handleAxiosError, HttpClient } from '@app/shared/http-client';

export const getTags = async () => {
  try {
    const { data } = await HttpClient.get(`/tags`);

    return Promise.resolve(data);
  } catch (error) {
    let reason = '';

    handleAxiosError(error, (message) => {
      reason = message;
    });

    return Promise.reject(reason);
  }
};

export const getTagBySlug = async (slug: string) => {
  try {
    const { data } = await HttpClient.get(`/tags/${slug}`);

    return Promise.resolve(data);
  } catch (error) {
    let reason = '';

    handleAxiosError(error, (message) => {
      reason = message;
    });

    return Promise.reject(reason);
  }
};
