import {JSX, ReactNode} from "react";
import { Head } from "../head/Head";

/**
 * コンテンツレイアウトタイプ
 * @property children - ReactNode
 * @property title - タイトル
 */
type ContentLayoutProps = {
    children: ReactNode
    title: string
}

/**
 * コンテンツレイアウトのコンポーネント
 * @param props
 * @returns
 */
export const ContentLayout = (props: ContentLayoutProps): JSX.Element => {
    return (
        <>
            <Head title={props.title}/>
            {props.children}
        </>
    )
}