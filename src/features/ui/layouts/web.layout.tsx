import React from 'react';

import { Footer, Header } from '@app/features/ui/components';

type WebLayoutProps = {
  children: React.ReactElement;
};

export const WebLayout: React.FC<WebLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
