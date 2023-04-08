import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export const SearchForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.currentTarget);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex h-10 w-60 items-center overflow-hidden rounded-md border border-primary-600/30"
    >
      <span className="absolute left-2">
        <MagnifyingGlassIcon className="h-5 w-5 text-primary-600" />
      </span>
      <input
        className="h-full w-full border-none indent-10 text-sm placeholder-primary-600/50 outline-0"
        type="search"
        placeholder="Search ..."
        autoComplete="off"
      />
    </form>
  );
};
