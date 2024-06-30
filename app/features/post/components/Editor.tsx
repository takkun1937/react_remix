import { JSX, useContext, useEffect, useState } from 'react';
import { PostSpaceContextType } from '../types';
import { PostSpaceContext } from '../providers/postSpaceProvider';

/**
 * Editorのコンポーネント
 * @returns
 */
export const Editor = (): JSX.Element => {
  const [MonacoEditor, setMonacoEditor] = useState(null);
  const postSpaceContext: PostSpaceContextType = useContext(PostSpaceContext);
  const defaultValue = '// MarkDown記法で書いてみましょう！';
  const [value, setValue] = useState<string>(defaultValue);

  // SSRのため、ダイナミックインポート
  useEffect(() => {
    import('@monaco-editor/react').then((Module) => {
      setMonacoEditor(() => Module.default);
    });
  }, []);

  // エディタのソースコード変更
  const handleEditorChange = (value: string) => {
    setValue(value);
    postSpaceContext.handleEditorChange(value);
  };

  return MonacoEditor ? (
    <MonacoEditor
      language='markdown'
      defaultValue={defaultValue}
      value={value}
      onChange={handleEditorChange}
    />
  ) : (
    <></>
  );
};
