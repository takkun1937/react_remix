import {JSX, useContext} from "react";
import { languageOptions } from "~/common/constants/constants";
import { WorkSpaceContextType } from "../../type";
import { WorkSpaceContext } from "../../providers/workSpaceProvider";

/**
 * ワークスペースのコンポーネント
 * @returns
 */
export const LanguagesDropdown = (): JSX.Element => {
    const workSpaceContext: WorkSpaceContextType = useContext(WorkSpaceContext);

    // エディタ設定言語の変更
    const onSelectChange = (index: number) => {
        workSpaceContext.handleLanguageOption(index);
    }
    
    return (
        <select
            className="h-11 rounded border-solid border border-black outline-none"
            defaultValue={languageOptions[0].value}
            onChange={(e) => {onSelectChange(e.target.selectedIndex)}}>
            {languageOptions.map((languageOption, index) => (
                <option key={index} value={languageOption.value}>{languageOption.label}</option>
            ))}
        </select>
    );
}