import type { User } from '@app/features/users/users.types';

export type Author = Omit<User, 'id' | 'email'>;

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  author: Author;
  createdAt: Date;
};
