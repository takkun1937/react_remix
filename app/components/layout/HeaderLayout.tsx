import { useNavigate } from "@remix-run/react";
import {JSX} from "react";
import { ROUTE_PATH } from "~/common/constants/constants";

/**
 * ヘッダーレイアウトのコンポーネント
 * @returns
 */
export const HeaderLayout = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <div className="px-8 pt-2 bg-white">
            <div>
                <button
                    className="px-1.5 py-1.5 rounded cursor-pointer bg-green-500 text-base font-bold text-white"
                    onClick={() => navigate(ROUTE_PATH.ROOT)}>
                        App Logo
                </button>
            </div>
            <div>
                <button className="h-10 px-4 pt-2 cursor-pointer hover:text-black text-sm font-semibold text-black">ワークスペース</button>
                <button className="h-10 px-4 pt-2 cursor-pointer hover:text-black text-sm font-semibold text-gray-500">仕様書登録</button>
            </div>
        </div>
    )
}