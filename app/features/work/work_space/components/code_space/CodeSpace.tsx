import {JSX, useState} from "react";
import { Editor } from "./Editor";
import { Result } from "./Result";
import { LanguagesDropdown } from "./LanguagesDropdown";
import { languageOptions } from "~/common/constants/constants";

/**
 * コードスペースのコンポーネント
 * @returns
 */
export const CodeSpace = (): JSX.Element => {
    const [language, setLanguage] = useState<string>(languageOptions[0].value);

    const onSelectChange = (value: string) => {
        console.log("selected Option...", value);
        setLanguage(value);
      };
    
    return (
        <div className="flex flex-col w-full h-full">
            <div className="w-80 my-2 mx-4">
                <LanguagesDropdown
                    onSelectChange={onSelectChange}/>
            </div>
            <div className="flex grow w-full">
                <Editor
                    language={language}/>
                <Result/>
            </div>
        </div>
    );
}
