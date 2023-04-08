import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { PencilSquareIcon } from '@heroicons/react/24/solid';

import { ADMIN_MENU_ITEMS } from '@app/shared/constants';
import {
  AccountDropdown,
  Brand,
  Container,
  Menu,
} from '@app/features/ui/components';

export const AdminHeader = () => {
  const { status, data: session } = useSession();

  return (
    <header className="z-10 flex h-20 w-full w-full items-center bg-primary-100">
      <Container className="flex h-full items-center justify-between">
        <div className="flex h-full items-center gap-x-14">
          <Brand />
          <Menu items={ADMIN_MENU_ITEMS} />
        </div>
        <div className="flex h-full items-center">
          <Link href="/admin/posts/write">
            <PencilSquareIcon className="h-5 w-5 text-primary-600" />
          </Link>
          <span className="mx-6 h-6 border-l border-l-primary-600/50" />
          {status === 'authenticated' && (
            <AccountDropdown author={session?.user} />
          )}
        </div>
      </Container>
    </header>
  );
};
