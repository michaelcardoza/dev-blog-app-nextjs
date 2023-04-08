import React from 'react';
import { CalendarIcon } from '@heroicons/react/24/solid';

import { ALIGNS } from '@app/shared/constants';
import { getFormattedDate } from '@app/shared/utils/dates';
import { Typography } from '@app/features/ui/components';

type PostMetaProps = {
  authorName: string;
  date: Date;
  align?: 'left' | 'center' | 'right';
};

export const PostMeta: React.FC<PostMetaProps> = (props) => {
  const { authorName, date, align = 'left' } = props;

  return (
    <div className={`flex items-center gap-x-4 ${ALIGNS.flex[align]}`}>
      <div className="flex items-center gap-x-2">
        <span className="block h-6 w-6 rounded-full bg-neutral-600" />
        <Typography component="span" className="text-neutral-500" fontSize={13}>
          {authorName}
        </Typography>
      </div>
      <span className="block h-5 w-[1px] bg-neutral-300" />
      <div className="flex items-center gap-x-2">
        <CalendarIcon className="h-5 w-5 text-neutral-600" />
        <Typography component="span" className="text-neutral-500" fontSize={13}>
          {getFormattedDate(date, 'DD MMMM YYYY')}
        </Typography>
      </div>
    </div>
  );
};
