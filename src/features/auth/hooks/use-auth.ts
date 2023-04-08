import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export type LoginFormFields = {
  username: string;
  password: string;
};

export const useAuth = () => {
  const router = useRouter();

  const login = async ({ username, password }: LoginFormFields) => {
    const response = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    if (response?.ok && response?.status === 200 && !response?.error) {
      await router.push('/admin');
    }
  };

  const register = () => {
    // pass
  };

  return {
    login,
    register,
  };
};
