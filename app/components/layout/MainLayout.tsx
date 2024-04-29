import {JSX, ReactNode, useContext, useEffect, useRef} from "react";
import { HeaderLayout } from "./HeaderLayout";
import { FooterLayout } from "./FooterLayout";
import { Rnd } from "react-rnd";
import { CodeSpace } from "~/features/work/work_space/components/code_space/CodeSpace";
import { LayoutContext } from "~/features/work/work_space/providers/workSpaceProvider";
import { useLocation } from "@remix-run/react";
import { ROUTE_PATH } from "~/common/constants/constants";
import ResizeHandle from "../../assets/images/resize_handle.png";

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
    const layoutContext = useContext(LayoutContext);
    const location = useLocation();
    const codeSpaceHeightRatioRef = useRef<number>(layoutContext.rndLayout.codeSpaceHeightRatio);

    // CodeSpaceの高さの割合を追跡
    useEffect(() => {
        codeSpaceHeightRatioRef.current = layoutContext.rndLayout.codeSpaceHeightRatio;
    }, [layoutContext.rndLayout.codeSpaceHeightRatio]);

    useEffect(() => {
        // 初期値の設定
        layoutContext.handleCodeSpaceResize(window.innerHeight, 0.5);

        // ウィンドウのリサイズイベントを監視
        const handleResize = () => {
            layoutContext.handleCodeSpaceResize(window.innerHeight, codeSpaceHeightRatioRef.current);
        }

        window.addEventListener('resize', handleResize);

        // コンポーネントのクリーンアップ時にイベントリスナーを削除
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // CodeSpaceのサイズ変化
    const handleCodeSpaceResize = (
        _e: MouseEvent | TouchEvent,
        _direction: string,
        ref: HTMLElement,
    ) => {
        const newHeightRatio = parseInt(ref.style.height) / window.innerHeight;
        layoutContext.handleCodeSpaceResize(window.innerHeight, newHeightRatio);
    }

    const resizeHandleComponent = (): JSX.Element => {
        return(
            <div className="flex justify-center w-full h-6 border-t border-black border-solid bg-white">
                <img src={ResizeHandle} alt="" width="24" height="24"/>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen">
            <HeaderLayout/>
                {props.children}
            <FooterLayout/>
            {location.pathname === ROUTE_PATH.ROOT && (
                <Rnd
                    size={{ width: '100%', height: (layoutContext.rndLayout.windowHeight * layoutContext.rndLayout.codeSpaceHeightRatio) }}
                    position={{x: 0, y: layoutContext.rndLayout.windowHeight - (layoutContext.rndLayout.windowHeight * layoutContext.rndLayout.codeSpaceHeightRatio)}}
                    disableDragging={true}
                    enableResizing={layoutContext.enabledTopResize}
                    onResize={handleCodeSpaceResize}
                    maxHeight="50%"
                    minHeight="24px"
                    resizeHandleComponent={{
                        top: resizeHandleComponent()
                    }}>
                    <CodeSpace/>
                </Rnd>
            )}
        </div>
    );
}