import { usePosts } from '@app/features/posts/hooks';
import { WebLayout } from '@app/features/ui/layouts';
import { TagList } from '@app/features/tags/components';
import { FeaturedPostCard, PostList } from '@app/features/posts/components';
import { Container, Title } from '@app/features/ui/components';

export default function HomePage() {
  const { posts, hasMore, isLoading, onLoadMore } = usePosts();

  return (
    <main>
      <section className="bg-primary-50 py-20">
        <Container>
          <FeaturedPostCard post={posts[0]} />
        </Container>
      </section>
      <Container className="my-20 grid gap-12 md:grid-cols-5">
        <section className="col-span-3">
          <Title highlight="Recently" text="Posted month" mb={8} />
          <PostList
            posts={posts.slice(1, posts.length)}
            hasMore={hasMore}
            isLoading={isLoading}
            onLoadMore={onLoadMore}
          />
        </section>
        <aside className="col-span-2 hidden flex-col gap-y-16 md:flex">
          <TagList />
        </aside>
      </Container>
    </main>
  );
}

HomePage.layout = WebLayout;
