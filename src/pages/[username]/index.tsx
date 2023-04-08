import type { GetServerSidePropsContext } from 'next';

import type { User } from '@app/features/users/users.types';
import { usePosts } from '@app/features/posts/hooks';
import { WebLayout } from '@app/features/ui/layouts';
import { PostList } from '@app/features/posts/components';
import { Container, Title, Typography } from '@app/features/ui/components';
import { getAuthorByUsername } from '@app/features/users/users.service';

type AuthorPageProps = {
  author: Omit<User, 'email'>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;

  try {
    const user = await getAuthorByUsername(query.username as string);

    return {
      props: {
        author: user,
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

export default function AuthorPage({ author }: AuthorPageProps) {
  const { posts, hasMore, isLoading, onLoadMore } = usePosts(
    `author=${author.username}`,
  );

  return (
    <>
      <section className="bg-primary-50">
        <Container className="py-14" small>
          <Typography varient="h3" component="h1" className="mb-6">
            {`Hi I'm ${author.profile.firstName} ${author.profile.lastName}`}
          </Typography>
          <Typography component="p">{author.profile.bio}</Typography>
        </Container>
      </section>
      <Container className="my-20" small>
        <section className="col-span-3">
          <Title highlight="Read" text="Author Blogs" mb={8} />
          <PostList
            posts={posts}
            hasMore={hasMore}
            isLoading={isLoading}
            onLoadMore={onLoadMore}
          />
          {posts.length === 0 && !isLoading && (
            <Typography className="text-center text-neutral-600">
              This user has no articles yet
            </Typography>
          )}
        </section>
      </Container>
    </>
  );
}

AuthorPage.layout = WebLayout;
