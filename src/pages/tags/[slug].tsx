import type { GetServerSidePropsContext } from 'next';

import type { Tag } from '@app/features/tags/tags.types';
import { getTagBySlug } from '@app/features/tags/tags.service';
import { usePosts } from '@app/features/posts/hooks';
import { TagList } from '@app/features/tags/components';
import { PostList } from '@app/features/posts/components';
import { WebLayout } from '@app/features/ui/layouts';
import { Container, Typography } from '@app/features/ui/components';

type TagBySlugPageProps = {
  tag: Tag;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;

  try {
    const tag = await getTagBySlug(query.slug as string);

    return {
      props: {
        tag,
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: '/tags',
        permanent: false,
      },
    };
  }
}

export default function TagBySlugPage(props: TagBySlugPageProps) {
  const { tag } = props;
  const { posts, hasMore, isLoading, onLoadMore } = usePosts(`tag=${tag.name}`);

  return (
    <>
      <section className="bg-primary-50 py-20">
        <Container>
          <Typography component="h1" varient="h3">
            # {tag.name}
          </Typography>
        </Container>
      </section>
      <Container className="my-12 grid grid-cols-5 gap-12">
        <section className="col-span-3">
          <PostList
            posts={posts}
            hasMore={hasMore}
            isLoading={isLoading}
            onLoadMore={onLoadMore}
          />
        </section>
        <aside className="col-span-2 flex flex-col gap-y-16">
          <TagList />
        </aside>
      </Container>
    </>
  );
}

TagBySlugPage.layout = WebLayout;
