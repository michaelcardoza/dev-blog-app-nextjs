import React from 'react';

import { AdminHeader, Container } from '@app/features/ui/components';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <AdminHeader />
      <Container>{children}</Container>
    </>
  );
};
