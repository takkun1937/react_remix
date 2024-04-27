import {JSX, useContext} from "react";
import { Editor } from "./Editor";
import { Result } from "./Result";
import { LanguagesDropdown } from "./LanguagesDropdown";
import { WorkSpaceContextType } from "../../type";
import { WorkSpaceContext } from "../../providers/workSpaceProvider";

/**
 * コードスペースのコンポーネント
 * @returns
 */
export const CodeSpace = (): JSX.Element => {
    const workSpaceContext: WorkSpaceContextType = useContext(WorkSpaceContext);
    
    return (
        <div className="flex flex-col w-full h-full">
            <div className="w-80 my-2 mx-4">
                <LanguagesDropdown/>
            </div>
            <div className="flex grow w-full">
                <Editor/>
                <Result/>
            </div>
        </div>
    );
}
