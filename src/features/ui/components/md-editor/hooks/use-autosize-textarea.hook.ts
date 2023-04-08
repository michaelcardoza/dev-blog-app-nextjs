import { useEffect, useRef } from 'react';

export const useAutosizeTextarea = (deps: Readonly<unknown[]>) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const element = textAreaRef?.current;

    if (element) {
      element.style.height = '0px';
      element.style.height = element.scrollHeight + 'px';
    }
  }, [deps]);

  return textAreaRef;
};
