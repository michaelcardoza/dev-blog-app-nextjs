import React, { useState } from 'react';

import { useAutosizeTextarea } from '@app/features/ui/components/md-editor/hooks';
import { MarkdownToolbar } from '@app/features/ui/components/md-editor/md-toolbar';
import { MarkdownPreview } from '@app/features/ui/components';

enum EditorMode {
  WRITE = 'write',
  PREVIEW = 'preview',
}

export const MarkdownEditor = () => {
  const [mode, setMode] = useState<EditorMode>(EditorMode.WRITE);
  const [markdownInput, setMarkdownInput] = useState<string>(
    '# title\n- item\n- item\n- item\n- item\n- item\n- item\n- item\n- item',
  );
  const textAreaRef = useAutosizeTextarea([markdownInput, mode]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownInput(event.target.value);
  };

  const handleChangeEditorMode = (mode: EditorMode) => () => {
    setMode(mode);
  };

  return (
    <div className="">
      <div className="mb-10 flex items-center justify-between border-b px-4">
        <MarkdownToolbar />
        {mode === EditorMode.PREVIEW && (
          <button
            className="text-neutral-500 hover:text-primary-600"
            onClick={handleChangeEditorMode(EditorMode.WRITE)}
          >
            Write
          </button>
        )}
        {mode === EditorMode.WRITE && (
          <button
            className="text-neutral-500 hover:text-primary-600"
            onClick={handleChangeEditorMode(EditorMode.PREVIEW)}
          >
            Preview
          </button>
        )}
      </div>
      {mode === EditorMode.WRITE && (
        <textarea
          ref={textAreaRef}
          className="w-full resize-none overflow-hidden p-2 outline-0"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder="Write your post content ..."
          value={markdownInput}
          onChange={handleChange}
        />
      )}
      {mode === EditorMode.PREVIEW && <MarkdownPreview value={markdownInput} />}
    </div>
  );
};
