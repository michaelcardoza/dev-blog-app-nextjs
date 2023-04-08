import type { NextPage } from 'next';

import { WebLayout } from './web.layout';
import { DashboardLayout } from './dashboard.layout';
import { AuthLayout } from './auth.layout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layout?: typeof WebLayout | typeof DashboardLayout | typeof AuthLayout;
};

export * from './web.layout';
export * from './dashboard.layout';
export * from './auth.layout';
