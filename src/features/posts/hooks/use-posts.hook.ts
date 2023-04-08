import { useEffect, useState } from 'react';

import type { Post } from '@app/features/posts/posts.types';
import { getUrlSearchParamsFromString } from '@app/shared/utils/objects';
import { getPosts } from '@app/features/posts/posts.service';

export const usePosts = (params = '') => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);

  const onLoadMore = async () => {
    setIsLoading(true);

    try {
      const urlSearchParams = getUrlSearchParamsFromString(params);
      const response = await getPosts({
        ...urlSearchParams,
        page: page + 1,
      });

      setPosts((prevState) => [...prevState, ...response.data]);
      setHasMore(response.hasMore);
      setPage((prevState) => prevState + 1);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const response = await getPosts(getUrlSearchParamsFromString(params));

        setPosts(response.data);
        setHasMore(response.hasMore);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, [params]);

  return { posts, isLoading, hasMore, onLoadMore };
};
