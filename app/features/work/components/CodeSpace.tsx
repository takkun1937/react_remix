import {JSX} from "react";
import { Editor } from "./Editor";
import { Result } from "./Result";
import { LanguagesDropdown } from "./LanguagesDropdown";

/**
 * コードスペースのコンポーネント
 * @returns
 */
export const CodeSpace = (): JSX.Element => {
    
    return (
        <div className="flex w-full h-full overflow-auto bg-white">
            <div className="flex flex-col mt-8 ml-8 w-1/2 h-full">
                <LanguagesDropdown/>
                <div className="grow mt-8">
                    <Editor/>
                </div>
            </div>
            <div className="grow mt-8 mr-8 ml-8 h-full">    
                <Result/>
            </div>
        </div>
    );
}
