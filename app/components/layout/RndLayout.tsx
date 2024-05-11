import {JSX, ReactNode, useContext, useEffect, useRef} from "react";
import { Rnd } from "react-rnd";
import { LayoutContext } from "~/features/work/work_space/providers/workSpaceProvider";
import ResizeHandle from "../../assets/images/resize_handle.png";

/**
 * Rndレイアウトタイプ
 * @property children - ReactNode
 */
type RndLayoutProps = {
    children: ReactNode
}

/**
 * Rndレイアウトのコンポーネント
 * @param props
 * @returns
 */
// TODO: 抽象化する
export const RndLayout = (props: RndLayoutProps): JSX.Element => {
    const layoutContext = useContext(LayoutContext);
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
            {props.children}
        </Rnd>
    );
}