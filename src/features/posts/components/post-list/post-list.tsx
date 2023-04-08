import React from 'react';

import type { Post } from '@app/features/posts/posts.types';
import { PostCard } from '@app/features/posts/components';
import { CircularProgress } from '@app/features/ui/components';

type PostListProps = {
  posts: Post[];
  hasMore?: boolean;
  isLoading?: boolean;
  onLoadMore?: () => void;
};

export const PostList: React.FC<PostListProps> = (props) => {
  const { posts, hasMore, isLoading, onLoadMore } = props;

  return posts.length ? (
    <div className="flex flex-col gap-y-14">
      <div className="flex flex-col gap-y-14">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {hasMore && (
            <div className="text-center">
              <button
                className="h-12 w-fit rounded-lg border border-primary-600 px-8 text-center text-primary-600"
                onClick={onLoadMore}
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  ) : null;
};
