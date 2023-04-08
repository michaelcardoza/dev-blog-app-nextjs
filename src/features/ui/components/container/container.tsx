import React from 'react';

type ContainerProps = {
  children?: React.ReactNode;
  className?: string | undefined;
  small?: boolean;
};

export const Container: React.FC<ContainerProps> = (props) => {
  const { children, className = '', small = false } = props;

  return (
    <div
      className={`mx-auto w-full px-4 ${className} ${
        small ? 'max-w-3xl' : 'max-w-5xl'
      }`}
    >
      {children}
    </div>
  );
};
