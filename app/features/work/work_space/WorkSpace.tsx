import {JSX, useEffect, useState} from "react";
import { ContentLayout } from "~/components/layout/ContentLayout";
import {useTranslation} from "react-i18next";

/**
 * ワークスペースのコンポーネント
 * @returns
 */
export const WorkSpace = (): JSX.Element => {
    const {t} = useTranslation();
    const [Editor, setEditor] = useState(null);

    // SSRのため、ダイナミックインポート
    useEffect(() => {
        import('@monaco-editor/react').then((Module) => {
          setEditor(() => Module.default);
        });
    }, []);

    const handleEditorChange = (value: string) => {
        console.log(value);
    }
    
    return (
        <ContentLayout title={`${t('title.work_space')}`}>
            <div className="grow bg-gray-100">
                {Editor && (<Editor
                    height="90vh"
                    theme="vs-dark"
                    defaultLanguage="javascript"
                    defaultValue="// some comment"
                    onChange={handleEditorChange}
                />)}
            </div>
        </ContentLayout>
    );
}