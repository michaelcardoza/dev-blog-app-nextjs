import Link from 'next/link';

import { AuthLayout } from '@app/features/ui/layouts';
import { LoginForm } from '@app/features/auth/components';
import { Typography } from '@app/features/ui/components';

export default function LoginPage() {
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-y-10">
      <div className="mb-6">
        <Typography component="h2" varient="h1" className="mb-4">
          Welcome!
        </Typography>
        <Typography component="p" varient="h6" fontWeight="light">
          Please enter log in details below
        </Typography>
      </div>
      <LoginForm />
      <span className="text-center">Or continue</span>
      <button>Log in with Google</button>
      <Typography className="text-center text-neutral-500">
        {`Don't have an account?`}{' '}
        <Link href="/register" className="font-bold text-neutral-700">
          Sign up
        </Link>
      </Typography>
    </div>
  );
}

LoginPage.layout = AuthLayout;
