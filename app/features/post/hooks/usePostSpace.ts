import { useRef, useState } from 'react';
import { PostSpaceContextType } from '../types';

/**
 * PostSpaceのApiフック
 * @return PostSpaceContextType
 */
export const usePostSpace = (): PostSpaceContextType => {
  // エディタのソースコード
  const [markdown, setMarkdown] = useState<string>('');

  // エディタのソースコード変更
  const handleEditorChange = (value: string) => {
    setMarkdown(value);
  };

  return {
    markdown,
    handleEditorChange,
  };
};
