import React from 'react';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <section className="grid h-screen grid-cols-2 items-center bg-primary-50 px-8">
      <div>{children}</div>
      <div></div>
    </section>
  );
};
