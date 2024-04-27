import {JSX, useContext, useEffect, useState} from "react";
import { WorkSpaceContextType } from "../../type";
import { WorkSpaceContext } from "../../providers/workSpaceProvider";

/**
 * Editorのコンポーネント
 * @returns
 */
export const Editor = (): JSX.Element => {
    const [MonacoEditor, setMonacoEditor] = useState(null);
    const workSpaceContext: WorkSpaceContextType = useContext(WorkSpaceContext);
    const [value, setValue] = useState<string>('');

    // SSRのため、ダイナミックインポート
    useEffect(() => {
        import('@monaco-editor/react').then((Module) => {
          setMonacoEditor(() => Module.default);
        });
    }, []);

    // エディタのソースコード変更
    const handleEditorChange = (value: string) => {
        setValue(value);
        workSpaceContext.handleEditorChange(value);
    }
    
    return (
        MonacoEditor ? (<MonacoEditor
            width="50%"
            theme="vs-dark"
            language={workSpaceContext.selectedLanguageOption.value}
            defaultValue=""
            value={value}
            onChange={handleEditorChange}
        />) : <></>
    );
}
