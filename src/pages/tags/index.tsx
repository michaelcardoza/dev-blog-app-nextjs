import Link from 'next/link';

import type { Tag } from '@app/features/tags/tags.types';
import { getTags } from '@app/features/tags/tags.service';
import { WebLayout } from '@app/features/ui/layouts';
import { Container, Title, Typography } from '@app/features/ui/components';

type TopicsPageProps = {
  tags: Tag[];
};

export async function getStaticProps() {
  const tags = await getTags();

  return {
    props: {
      tags,
    },
  };
}

export default function TopicsPage(props: TopicsPageProps) {
  const { tags } = props;

  return (
    <Container className="py-12">
      <Title highlight="Top" text="Tags" mb={10} />
      <section className="grid grid-cols-3 gap-8">
        {tags.map((tag) => (
          <Link
            href={`/tags/${tag.name}`}
            key={tag.id}
            className="group rounded-lg border border-primary-200 bg-transparent p-6 hover:bg-primary-200"
          >
            <Typography
              varient="h6"
              component="h2"
              className="mb-4 text-left text-primary-600"
              fontWeight="semibold"
            >
              # {tag.name}
            </Typography>
            <Typography className="text-left text-neutral-500" fontSize={13}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda culpa dicta dolor dolores ducimus.
            </Typography>
          </Link>
        ))}
      </section>
      <section className="mt-20 rounded-lg bg-primary-100 py-10 px-6 text-center">
        <Typography varient="h3" component="h3" className="mb-6 text-center">
          Want to write on DevBlog?
        </Typography>
        <Typography className="mb-10 text-center text-neutral-500">
          there have some simple steps, by following these steps you can be a
          regular author in DevBlog.
        </Typography>
        <button className="h-12 w-fit rounded-lg border border-primary-600 px-8 text-center text-primary-600">
          Write on DevBlog
        </button>
      </section>
    </Container>
  );
}

TopicsPage.layout = WebLayout;
