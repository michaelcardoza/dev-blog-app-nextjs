import React from 'react';
import Link from 'next/link';

import type { MenuItem } from '@app/shared/types';

type MenuProps = {
  items: MenuItem[];
};

export const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <nav>
      <ul className="flex items-center gap-x-10">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-base">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
