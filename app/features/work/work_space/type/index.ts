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