import React from 'react';
import { useForm } from 'react-hook-form';

import type { LoginFormFields } from '@app/features/auth/hooks/use-auth';
import { loginFormResolver } from '@app/features/auth/components/login-form/login-form.validate';
import { useAuth } from '@app/features/auth/hooks';

type LoginFormProps = {};

export const LoginForm: React.FC<LoginFormProps> = () => {
  const { register, handleSubmit } = useForm<LoginFormFields>({
    resolver: loginFormResolver,
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const { login } = useAuth();

  return (
    <form onSubmit={handleSubmit(login)} className="flex flex-col gap-y-6">
      <input
        type="text"
        className="h-14 w-full rounded-lg px-4 outline-0"
        placeholder="username"
        {...register('username')}
      />
      <input
        type="password"
        className="h-14 w-full rounded-lg px-4 outline-0"
        placeholder="******"
        {...register('password')}
      />
      <button
        type="submit"
        className="h-14 w-full rounded-lg bg-primary-600 text-white outline-0"
      >
        Login
      </button>
    </form>
  );
};
