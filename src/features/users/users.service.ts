import { handleAxiosError, HttpClient } from '@app/shared/http-client';

export const getAuthorByUsername = async (username: string) => {
  try {
    const { data } = await HttpClient.get(`/users/${username}`);

    return Promise.resolve(data);
  } catch (error) {
    let reason = '';

    handleAxiosError(error, (message) => {
      reason = message;
    });

    return Promise.reject(reason);
  }
};
