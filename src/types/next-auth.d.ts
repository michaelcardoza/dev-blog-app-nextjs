import { DefaultSession, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    accessToken?: string;
    user: {
      id: string;
      email: string;
      username: string;
      profile: {
        firstName: string;
        lastName: string;
        image: string | null;
        bio: string | null;
        work: string | null;
        location: string | null;
        website: string | null;
      };
    };
  }

  interface User {
    accessToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
  }
}
