import React from 'react';
import Link from 'next/link';

import { Title, Typography } from '@app/features/ui/components';

export const TopAuthors = () => {
  return (
    <div>
      <Title highlight="Top" text="Author" mb={8} />
      <ul className="flex flex-col gap-y-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <li key={index}>
            <div className="flex items-center gap-x-6">
              <span className="block h-20 w-20 rounded-full bg-neutral-500" />
              <div className="flex flex-col gap-y-2">
                <div>
                  <Typography varient="h6" component="h6">
                    Jenny Kia
                  </Typography>
                  <Typography fontSize={13} className="text-neutral-500">
                    20 posts
                  </Typography>
                </div>
                <Link
                  href="/author/author"
                  className="text-sm text-primary-600"
                >
                  See details about author
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
