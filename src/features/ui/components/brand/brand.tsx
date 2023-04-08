import Link from 'next/link';

export const Brand = () => {
  return (
    <Link href="/" className="flex items-end gap-x-1">
      <span className="block bg-primary-600 px-1 text-2xl font-semibold text-white">
        Dev
      </span>
      <span className="text-primary text-md font-medium">Blog</span>
    </Link>
  );
};
