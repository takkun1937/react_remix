import {JSX} from "react";

/**
 * コーディング結果のコンポーネント
 * @returns
 */
export const  Result = (): JSX.Element => {
    
    return (
        <div className="grow h-full">
            <h1>コーディング結果表示エリア</h1>
            <button>コンパイル</button>
        </div>
    );
}