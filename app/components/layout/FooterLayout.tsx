import { useLocation, useNavigate } from "@remix-run/react";
import {JSX} from "react";
import { useTranslation } from "react-i18next";
import { ROUTE_PATH } from "~/common/constants/constants";

/**
 * フッターレイアウトのコンポーネント
 * @returns
 */
export const FooterLayout = (): JSX.Element => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="flex px-8 py-12 justify-between items-center bg-gray-600">
            <button
                className="w-28 text-4xl font-bold text-white"
                onClick={() => navigate(ROUTE_PATH.ROOT)}>
                        {`${t('service_name')}`}
            </button>
            <label className="text-xs text-white">© 2024 Jin</label>
        </div>
    )
}