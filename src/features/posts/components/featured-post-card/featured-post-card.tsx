import React from 'react';
import Image from 'next/image';

import type { Post } from '@app/features/posts/posts.types';
import { PostCard } from '@app/features/posts/components';

type FeaturedPostCardProps = {
  post: Post;
};

export const FeaturedPostCard: React.FC<FeaturedPostCardProps> = (props) => {
  const { post } = props;

  return post ? (
    <article className="grid items-center gap-12 md:grid-cols-5">
      <PostCard post={post} asArticle={false} />
      <figure className="relative col-span-2 hidden h-80 w-full overflow-hidden rounded md:block">
        <Image className="object-cover" src="/cover-1.png" alt="" fill />
      </figure>
    </article>
  ) : null;
};
