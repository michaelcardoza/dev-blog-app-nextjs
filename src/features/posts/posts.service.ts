import type { HttpClientResponseArray } from '@app/shared/http-client';
import { handleAxiosError, HttpClient } from '@app/shared/http-client';
import { getUrlSearchParamsFromObject } from '@app/shared/utils/objects';

type QueryParams = {
  limit?: number;
  page?: number;
  tag?: string;
  author?: string;
};

export const getPosts = async (params: QueryParams = { limit: 4 }) => {
  try {
    const urlSearchParams = getUrlSearchParamsFromObject(params);
    const { data } = await HttpClient.get<HttpClientResponseArray>(
      `/feed?${urlSearchParams}`,
    );

    return Promise.resolve({
      data: data.data.map((item) => ({
        ...item,
        createdAt: new Date(item.createdAt),
      })),
      hasMore: data.hasMore,
      count: data.count,
    });
  } catch (error) {
    let reason = '';

    handleAxiosError(error, (message) => {
      reason = message;
    });

    return Promise.reject(reason);
  }
};

export const getPostBySlug = async (slug: string) => {
  try {
    const { data } = await HttpClient.get(`/posts/${slug}`);

    return Promise.resolve(data);
  } catch (error) {
    let reason = '';

    handleAxiosError(error, (message) => {
      reason = message;
    });

    return Promise.reject(reason);
  }
};
