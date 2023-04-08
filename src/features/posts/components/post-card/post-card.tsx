import React from 'react';
import Link from 'next/link';

import type { Post } from '@app/features/posts/posts.types';
import { Typography } from '@app/features/ui/components';
import { PostMeta } from '@app/features/posts/components/post-card/post-meta';

type PostCardProps = {
  post: Post;
  asArticle?: boolean;
};

export const PostCard: React.FC<PostCardProps> = (props) => {
  const { post, asArticle = true } = props;
  const Tag = asArticle ? 'article' : 'div';

  return (
    <Tag className="group col-span-3 flex flex-col gap-y-3">
      {post.tags.length ? (
        <div className="flex gap-x-2">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="block rounded bg-primary-200 px-2 py-1 text-xs text-neutral-500 hover:bg-primary-600 hover:text-primary-50"
            >
              # {tag}
            </Link>
          ))}
        </div>
      ) : null}
      <Link href={`/${post.author.username}/${post.slug}`}>
        <Typography
          varient="h4"
          component="h2"
          className="group-hover:text-primary-600"
        >
          {post.title}
        </Typography>
      </Link>
      <div className="flex gap-x-4">
        <PostMeta
          authorName={`${post.author.profile.firstName} ${post.author.profile.lastName}`}
          date={post.createdAt}
        />
      </div>
      <Typography className="mt-2 text-neutral-600" fontSize={15}>
        {post.excerpt}
      </Typography>
    </Tag>
  );
};
