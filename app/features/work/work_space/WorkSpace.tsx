import {JSX} from "react";
import { ContentLayout } from "~/components/layout/ContentLayout";
import {useTranslation} from "react-i18next";
import { CodeSpace } from "./components/code_space/CodeSpace";

/**
 * ワークスペースのコンポーネント
 * @returns
 */
export const WorkSpace = (): JSX.Element => {
    const {t} = useTranslation();
    
    return (
        <ContentLayout title={`${t('title.work_space')}`}>
            <div className="grow bg-gray-100">
                <div className="w-full h-1/2">
                    <CodeSpace/>
                </div>
            </div>
        </ContentLayout>
    );
}
