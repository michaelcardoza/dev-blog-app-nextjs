import type { MenuItem } from '@app/shared/types';

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'About us',
    href: '/about-us',
  },
  {
    label: 'Topics',
    href: '/tags',
  },
];

export const ADMIN_MENU_ITEMS: MenuItem[] = [
  {
    label: 'Dashboard',
    href: '/admin',
  },
];

export const ALIGNS = {
  flex: {
    left: 'justify-start',
    right: 'justify-end',
    center: 'justify-center',
  },
  text: {
    left: 'text-left',
    right: 'text-right',
    center: 'text-center',
  },
};
