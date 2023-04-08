import { useEffect, useState } from 'react';

import type { Tag } from '@app/features/tags/tags.types';
import { getTags } from '@app/features/tags/tags.service';

export const useTags = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    getTags()
      .then((data) => {
        setTags(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    isLoading,
    tags,
  };
};
