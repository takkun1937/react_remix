/**
 * エディタの内容
 */
export type EditorContentType = {
    /** インデックス */
    language: string
}

/**
 * Editor言語選択ドロップダウンプロパティ
 */
export type LanguagesDropdownProps = {
    onSelectChange: (value: string) => void
}

/**
 * Editor言語オプション
 */
export type LanguageOption = {
    id: number,
    name: string,
    label: string,
    value: string
}