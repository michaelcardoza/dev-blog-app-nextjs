export type User = {
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
