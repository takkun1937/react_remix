import { useState } from "react";
import { LanguageOption, WorkSpaceContextType } from "../type";
import { languageOptions } from "~/common/constants/constants";

/**
 * WorkSpaceのApiフック
 * @return WorkSpaceContextType
 */
export const useWorkSpace = (): WorkSpaceContextType => {
  // エディタに設定する言語
  const [selectedLanguageOption, setSelectedLanguageOption] = useState<LanguageOption>(languageOptions[0]);
  // エディタのソースコード
  const [code, setCode] = useState<string>('');

  // エディタの設定言語の変更
  const handleLanguageOption = (index: number) => {
    setSelectedLanguageOption(languageOptions[index]);
  }

  // エディタのソースコード変更
  const handleEditorChange = (value: string) => {
    setCode(value);
  }

  return {
      selectedLanguageOption,
      code,
      handleLanguageOption,
      handleEditorChange
  }
}