import { useState } from "react";
import { LayoutContextType, RndLayoutType } from "../type";

export const useLayout = (): LayoutContextType => {
    const [rndLayout, setRndLayout] = useState<RndLayoutType>({windowHeight: 0, codeSpaceHeightRatio: 0});

    //リザイズ可能箇所を無効
    const disabledResize: object = {
        bottom: false,
        bottomLeft: false,
        bottomRight: false,
        left: false,
        right: false,
        top: false,
        topLeft: false,
        topRight: false,
    };
    //リザイズ可能箇所だけを有効
    const enabledLeftResize = {...disabledResize, left: true};
    const enabledRightResize = {...disabledResize, right: true};
    const enabledLeftRightResize = {...disabledResize, left: true, right: true};
    const enabledTopResize = {...disabledResize, top: true};

    // CodeSpaceのサイズ変化
    const handleCodeSpaceResize = (
        windowHeight: number,
        codeSpaceHeightRatio: number,
    ) => {
        setRndLayout({
            windowHeight: windowHeight,
            codeSpaceHeightRatio: codeSpaceHeightRatio
        });
    }

    return {
        rndLayout,
        disabledResize,
        enabledLeftResize,
        enabledRightResize,
        enabledLeftRightResize,
        enabledTopResize,
        handleCodeSpaceResize
    }
}