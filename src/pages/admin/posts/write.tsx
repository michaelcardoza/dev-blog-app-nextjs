import { DashboardLayout } from '@app/features/ui/layouts';
import { MarkdownEditor, Typography } from '@app/features/ui/components';

export default function AdminWritePostPage() {
  return (
    <>
      <div className="flex items-center justify-between gap-x-10">
        {/*<input
          type="text"
          className="h-12 w-full rounded px-4 shadow shadow-neutral-200 outline-0 focus:outline-1 focus:outline-primary-600"
          placeholder="Title ..."
        />*/}
        <button className="flex h-10 w-fit items-center gap-x-2 rounded bg-primary-600 px-4 text-white">
          Save
        </button>
      </div>
      <div className="mt-10 flex flex-1 items-start gap-x-10">
        <div className="flex w-full flex-col gap-y-10">
          <div className="w-full overflow-hidden rounded bg-white shadow shadow-neutral-200">
            <div className="p-6">
              <MarkdownEditor />
            </div>
          </div>
          <div className="w-full overflow-hidden rounded bg-white shadow shadow-neutral-200">
            <div className="border-b border-b-neutral-200 p-6">
              <Typography varient="h6" fontWeight="semibold">
                Metadata
              </Typography>
            </div>
            <div className="p-6"></div>
          </div>
        </div>
        <div className="w-80">
          <div className="w-full overflow-hidden rounded bg-white shadow shadow-neutral-200">
            <div className="border-b border-b-neutral-200 p-6">
              <Typography varient="h6" fontWeight="semibold">
                Thumbnail
              </Typography>
            </div>
            <div className="p-6"></div>
          </div>
        </div>
      </div>
    </>
  );
}

AdminWritePostPage.layout = DashboardLayout;
