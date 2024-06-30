import {JSX} from "react";
import { ContentLayout } from "~/components/layout/ContentLayout";
import {useTranslation} from "react-i18next";

/**
 * ワークスペースのコンポーネント
 * @returns
 */
export const WorkSpace = (): JSX.Element => {
    const {t} = useTranslation();
    
    return (
        <ContentLayout title={`${t('title.work_space')}`}>
            <div className="grow px-8 bg-gray-100"></div>
        </ContentLayout>
    );
}
