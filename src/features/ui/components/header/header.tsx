import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { MENU_ITEMS } from '@app/shared/constants';
import {
  AccountDropdown,
  Brand,
  Container,
  Menu,
  SearchForm,
} from '@app/features/ui/components';

export const Header = () => {
  const { status, data: session } = useSession();

  return (
    <header className="z-10 flex h-20 w-full w-full items-center bg-primary-100">
      <Container className="flex h-full items-center justify-between">
        <div className="flex h-full items-center gap-x-14">
          <Brand />
          <Menu items={MENU_ITEMS} />
        </div>
        <div className="flex h-full items-center">
          <SearchForm />
          <span className="mx-6 h-6 border-l border-l-primary-600/50" />
          {status === 'authenticated' ? (
            <AccountDropdown author={session?.user} />
          ) : (
            <div className="flex items-center gap-x-6">
              <Link href="/login">Login</Link>
              <Link
                href="/register"
                className="flex h-10 items-center justify-center rounded-md border border-primary-600 px-6 text-primary-600"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};
