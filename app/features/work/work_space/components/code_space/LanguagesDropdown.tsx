import {JSX} from "react";
import { languageOptions } from "~/common/constants/constants";
import { LanguagesDropdownProps } from "../../type";

/**
 * ワークスペースのコンポーネント
 * @returns
 */
export const LanguagesDropdown = ({onSelectChange}: LanguagesDropdownProps): JSX.Element => {
    
    return (
        <select
            className="h-11 rounded border-solid border border-black outline-none"
            defaultValue={languageOptions[0].value}
            onChange={(e) => {onSelectChange(e.target.value)}}>
            {languageOptions.map((languageOption) => (
                <option key={languageOption.id} value={languageOption.value}>{languageOption.label}</option>
            ))}
        </select>
    );
}