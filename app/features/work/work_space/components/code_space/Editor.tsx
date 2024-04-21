import {JSX, useEffect, useState} from "react";
import { EditorContentType } from "../../type";

/**
 * Editorのコンポーネント
 * @returns
 */
export const Editor = (
    {
        language
    }: EditorContentType
): JSX.Element => {
    const [MonacoEditor, setMonacoEditor] = useState(null);

    // SSRのため、ダイナミックインポート
    useEffect(() => {
        import('@monaco-editor/react').then((Module) => {
          setMonacoEditor(() => Module.default);
        });
    }, []);

    const handleEditorChange = (value: string) => {
        console.log(value);
    }
    
    return (
        MonacoEditor ? (<MonacoEditor
            width="50%"
            theme="vs-dark"
            language={language || "javascript"}
            defaultValue="// some comment"
            onChange={handleEditorChange}
        />) : <></>
    );
}
