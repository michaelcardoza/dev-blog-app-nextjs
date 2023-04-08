import React from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

import type { Author } from '@app/features/posts/posts.types';
import { getNameLettersForAvatar } from '@app/shared/utils/strings';

type AccountDropdownProps = {
  author?: Author;
  align?: 'center' | 'right';
};

export const AccountDropdown: React.FC<AccountDropdownProps> = (props) => {
  const { author, align = 'center' } = props;

  return author?.username ? (
    <div
      className={`group relative flex h-full items-center ${
        align === 'center' && 'justify-center'
      } ${align === 'right' && 'justify-end'}`}
    >
      <span className="flex h-9 w-9 cursor-pointer select-none items-center justify-center rounded-full bg-black text-xs text-white">
        {getNameLettersForAvatar(
          author.profile.firstName,
          author.profile.lastName,
        )}
      </span>
      <div className="invisible absolute top-full z-10 w-[220px] rounded bg-white py-6 px-8 opacity-0 shadow-2xl shadow-neutral-200 group-hover:visible group-hover:opacity-100">
        <ul className="flex flex-col gap-y-4 text-neutral-600">
          <li>
            <Link href={author.username} className="hover:text-primary-600">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/admin/me" className="hover:text-primary-600">
              Edit profile
            </Link>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <Link href="/admin/posts" className="hover:text-primary-600">
              My posts
            </Link>
          </li>
          <li>
            <Link href="/admin/settings" className="hover:text-primary-600">
              Account Settings
            </Link>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <button
              className="hover:text-primary-600"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black" />
  );
};
