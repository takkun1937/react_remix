import { useLocation, useNavigate } from "@remix-run/react";
import {JSX} from "react";
import { useTranslation } from "react-i18next";
import { ROUTE_PATH } from "~/common/constants/constants";

/**
 * ヘッダーレイアウトのコンポーネント
 * @returns
 */
export const HeaderLayout = (): JSX.Element => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="px-8 pt-2 bg-white">
            <div>
                <button
                    className="px-1.5 py-1.5 rounded bg-green-500 text-base font-bold text-white"
                    onClick={() => navigate(ROUTE_PATH.ROOT)}>
                         {`${t('service_name')}`}
                </button>
            </div>
            <div>
                <button 
                    className={`h-10 px-4 pt-2 text-sm font-semibold ${location.pathname === ROUTE_PATH.ROOT ? 'border-b-4 border-green-500 text-black' : 'text-gray-500 hover:text-black'}`}
                    onClick={() => navigate(ROUTE_PATH.ROOT)}>{`${t('header.work_space')}`}</button>
                <button 
                    className={`h-10 px-4 pt-2 text-sm font-semibold ${location.pathname === ROUTE_PATH.REGISTER_WORK ? 'border-b-4 border-green-500 text-black' : 'text-gray-500 hover:text-black'}`}
                    onClick={() => navigate(ROUTE_PATH.REGISTER_WORK)}>{`${t('header.register_work')}`}</button>
            </div>
        </div>
    )
}