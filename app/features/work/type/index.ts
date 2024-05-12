/**
 * WorkSpaceAPIフックのタイプ
 */
export type WorkSpaceContextType = {
    selectedLanguageOption: LanguageOption;
    code: string;
    handleLanguageOption: (index: number) => void;
    handleEditorChange: (value: string) => void;
}

/**
 * Editor言語オプション
 */
export type LanguageOption = {
    id: number;
    name: string;
    label: string;
    value: string;
}

/**
 * LayoutAPIフックのタイプ
 */
export type LayoutContextType = {
    rndLayout: RndLayoutType;
    disabledResize: object;
    enabledLeftResize: object;
    enabledRightResize: object;
    enabledLeftRightResize: object;
    enabledTopResize: object;
    handleCodeSpaceResize: (windowHeight: number, codeSpaceHeightRatioRatio: number) => void;
}

/**
 * RND (resizable and draggable)
 */
export type RndLayoutType = {
    /** windowの高さ */
    windowHeight: number,
    /** CodeSpaceの高さの割合 */
    codeSpaceHeightRatio: number,
}