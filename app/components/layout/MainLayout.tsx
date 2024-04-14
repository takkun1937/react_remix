import {JSX, ReactNode} from "react";
import { HeaderLayout } from "./HeaderLayout";
import { FooterLayout } from "./FooterLayout";

/**
 * メインレイアウトタイプ
 * @property children - ReactNode
 * @property title - タイトル
 */
type MainLayoutProps = {
    children: ReactNode
}

/**
 * メインレイアウトのコンポーネント
 * @param props
 * @returns
 */
export const MainLayout = (props: MainLayoutProps): JSX.Element => {
    return (
        <>
            <HeaderLayout/>
                {props.children}
            <FooterLayout/>
        </>
    )
}