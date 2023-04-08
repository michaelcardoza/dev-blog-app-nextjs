import type { GetServerSidePropsContext } from 'next';
import Link from 'next/link';

import type { Post } from '@app/features/posts/posts.types';
import { getPostBySlug } from '@app/features/posts/posts.service';
import { WebLayout } from '@app/features/ui/layouts';
import { PostMeta } from '@app/features/posts/components';
import { MarkdownPreview, Typography } from '@app/features/ui/components';

type PostBySlugProps = {
  post: Post;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { query } = ctx;

  try {
    const post = await getPostBySlug(query.slug as string);

    return {
      props: {
        post,
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
}

export default function PostBySlug(props: PostBySlugProps) {
  const { post } = props;

  return (
    <>
      <section className="bg-primary-50">
        <div className="mx-auto max-w-4xl py-14 px-4">
          <div className="mb-6 flex justify-center gap-x-2">
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
          <Typography varient="h2" component="h1" className="mb-6 text-center">
            {post.title}
          </Typography>
          <Typography className="mb-6 text-center text-neutral-600">
            {post.excerpt}
          </Typography>
          <PostMeta
            authorName={post.author.username}
            date={post.createdAt}
            align="center"
          />
        </div>
      </section>
      <section className="my-20 mx-auto max-w-2xl px-4">
        <MarkdownPreview value={post.content} />
      </section>
      <section className="bg-primary-50">
        <div className="flex flex-col gap-y-3">
          <span className="block h-24 w-24 rounded-full bg-neutral-600" />
          <Typography component="p">
            {`${post.author.profile.firstName} ${post.author.profile.lastName}`}
          </Typography>
          <Typography component="p">{post.author.username}</Typography>
        </div>
      </section>
    </>
  );
}

PostBySlug.layout = WebLayout;
