import React, { useMemo } from 'react';

type tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type TypographyProps = {
  children?: React.ReactNode;
  varient?: tags;
  component?: tags | 'span' | 'div';
  className?: string | undefined;
  uppercase?: boolean;
  fontWeight?: 'light' | 'normal' | 'semibold' | 'bold';
  fontSize?: number;
};

const typograpghyStyles = {
  sizes: {
    h1: 'text-4xl md:text-5xl',
    h2: 'text-3xl md:text-4xl',
    h3: 'text-2xl md:text-3xl',
    h4: 'text-xl md:text-2xl',
    h5: 'text-lg md:text-xl',
    h6: 'text-base md:text-lg',
    p: 'text-base',
  },
  weights: {
    light: 'font-light',
    normal: 'font-normal',
    semibold: 'font-semibold',
    bold: 'font-bold',
  },
};

export const Typography: React.FC<TypographyProps> = (props) => {
  const {
    children,
    fontWeight,
    fontSize,
    className = '',
    varient = 'p',
    component: Tag = 'p',
    uppercase = false,
  } = props;

  const classes = useMemo(() => {
    let result = '';

    if (
      varient === 'h1' ||
      varient === 'h2' ||
      varient === 'h3' ||
      varient === 'h4'
    ) {
      result = `${!fontSize ? typograpghyStyles.sizes[varient] : ''} ${
        fontWeight ? typograpghyStyles.weights[fontWeight] : 'font-semibold'
      } `;
    }

    if (varient === 'h5' || varient === 'h6' || varient === 'p') {
      result = `${!fontSize ? typograpghyStyles.sizes[varient] : ''} ${
        fontWeight ? typograpghyStyles.weights[fontWeight] : 'font-normal'
      }`;
    }

    return result;
  }, [varient, fontWeight, fontSize]);

  return (
    <Tag
      className={`${classes} ${uppercase ? 'uppercase' : ''} ${className}`}
      style={{ fontSize }}
    >
      {children}
    </Tag>
  );
};
