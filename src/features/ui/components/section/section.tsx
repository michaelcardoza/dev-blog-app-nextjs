import React from 'react';
import Link from 'next/link';

import { Typography } from '@app/features/ui/components';

type SectionProps = {
  title?: string;
  viewAllUrl?: string;
  className?: string;
  children?: React.ReactNode;
};

export const Section: React.FC<SectionProps> = (props) => {
  const { title, viewAllUrl, children, className = '' } = props;

  return (
    <section className={className}>
      {title && (
        <div className="mb-8 flex items-center justify-between">
          <Typography varient="h2" component="h3" className="text-slate-700">
            {title}
          </Typography>
          {viewAllUrl && (
            <Link
              href={viewAllUrl}
              className="hover:text-primary text-slate-400"
            >
              View all
            </Link>
          )}
        </div>
      )}
      {children}
    </section>
  );
};
