import React from 'react';
import ReactMarkdown from 'react-markdown';

type MarkdownPreviewProps = {
  value: string;
};

export const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ value }) => {
  return (
    <div className="md-editor-preview">
      <ReactMarkdown components={{ h1: 'h2' }}>{value}</ReactMarkdown>
    </div>
  );
};
