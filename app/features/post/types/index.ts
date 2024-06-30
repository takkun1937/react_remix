import { MutableRefObject } from 'react';

/**
 * PostSpaceAPIフックのタイプ
 */
export type PostSpaceContextType = {
  markdown: string;
  handleEditorChange: (value: string) => void;
};
