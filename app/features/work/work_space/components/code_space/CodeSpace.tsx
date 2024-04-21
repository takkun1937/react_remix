import {JSX} from "react";
import { Editor } from "./Editor";
import { Result } from "./Result";

/**
 * コードスペースのコンポーネント
 * @returns
 */
export const CodeSpace = (): JSX.Element => {
    
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex grow w-full">
                <Editor
                    language={'javascript'}/>
                <Result/>
            </div>
        </div>
    );
}
