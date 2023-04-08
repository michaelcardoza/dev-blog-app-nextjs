import {
  BoldIcon,
  CodeIcon,
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  ListBulletedIcon,
  ListNumberedIcon,
  QuoteIcon,
  TitleIcon,
  UnderlinedIcon,
} from '@app/features/ui/components/md-editor/icons';

export const MarkdownToolbar = () => {
  return (
    <div className="flex items-center gap-x-4 py-4">
      <button className="">
        <TitleIcon className="h-6 w-6 fill-neutral-600 hover:fill-primary-600" />
      </button>
      <span className="mx-2 block h-6 w-[1px] bg-neutral-300" />
      <button>
        <BoldIcon className="h-6 w-6 fill-neutral-600 hover:fill-primary-600" />
      </button>
      <button>
        <ItalicIcon className="h-6 w-6 fill-neutral-600 hover:fill-primary-600" />
      </button>
      <button>
        <UnderlinedIcon className="h-6 w-6 fill-neutral-600 hover:fill-primary-600" />
      </button>
      <span className="mx-2 block h-6 w-[1px] bg-neutral-300" />
      <button>
        <ListBulletedIcon className="h-6 w-6 fill-neutral-600 hover:fill-primary-600" />
      </button>
      <button>
        <ListNumberedIcon className="h-6 w-6 fill-neutral-600 hover:fill-primary-600" />
      </button>
      <span className="mx-2 block h-6 w-[1px] bg-neutral-300" />
      <button>
        <LinkIcon className="h-6 w-6 fill-neutral-600 hover:fill-primary-600" />
      </button>
      <span className="mx-2 block h-6 w-[1px] bg-neutral-300" />
      <button>
        <QuoteIcon className="h-6 w-6 fill-neutral-600 hover:fill-primary-600" />
      </button>
      <span className="mx-2 block h-6 w-[1px] bg-neutral-300" />
      <button>
        <CodeIcon className="h-6 w-6 fill-neutral-600 hover:fill-primary-600" />
      </button>
      <span className="mx-2 block h-6 w-[1px] bg-neutral-300" />
      <button>
        <ImageIcon className="h-6 w-6 fill-neutral-600 hover:fill-primary-600" />
      </button>
    </div>
  );
};
