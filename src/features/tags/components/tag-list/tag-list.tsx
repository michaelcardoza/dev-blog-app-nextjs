import Link from 'next/link';

import { Title } from '@app/features/ui/components';
import { useTags } from '@app/features/tags/hooks';

export const TagList = () => {
  const { tags, isLoading } = useTags();

  return !isLoading ? (
    <div>
      <Title highlight="Search" text="With Tags" mb={8} />
      {tags.length ? (
        <ul className="flex flex-wrap gap-4">
          {tags.map((tag) => (
            <li key={tag.id}>
              <Link
                href={`/tags/${tag.name}`}
                className="border-gray rounded border bg-transparent px-2 py-1 text-sm text-neutral-500 hover:border-primary-600 hover:bg-primary-600 hover:text-white"
              >
                # {tag.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  ) : null;
};
