import React from 'react';
import { Typography } from '@app/features/ui/components';

type TitleProps = {
  highlight: string;
  text: string;
  align?: 'center' | 'left';
  mb?: number;
};

export const Title: React.FC<TitleProps> = (props) => {
  const { highlight, text, mb, align = 'left' } = props;
  const textAlign = {
    center: 'justify-center',
    left: 'justify-start',
  };

  return (
    <div
      className={`flex items-center gap-x-2 ${textAlign[align]}`}
      style={{ marginBottom: mb ? mb * 4 : undefined }}
    >
      <Typography
        component="h3"
        varient="h5"
        className="bg-primary-600 p-1 text-white"
      >
        {highlight}
      </Typography>
      <Typography component="h3" varient="h5">
        {text}
      </Typography>
    </div>
  );
};
