import {JSX} from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {useTranslation} from "react-i18next";

/**
 * Headタイプ
 * @property title - タイトル
 * @property description - 説明
 */
type HeadProps = {
    title?: string,
    description?: string
}

/**
 * Headコンポーネント
 * @param props Headタイプ
 * @returns
 */
export const Head = (props: HeadProps): JSX.Element => {
    const {t} = useTranslation();
    return (
        <HelmetProvider>
            <Helmet
                title={props.title ? `${props.title} | ${t("service_name")}` : undefined}
                defaultTitle={`${t("service_name")}`}
            >
                <meta name="description" content={props.description}/>
            </Helmet>
        </HelmetProvider>
    );
};
