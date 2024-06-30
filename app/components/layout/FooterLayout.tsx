import { useLocation, useNavigate } from "@remix-run/react";
import {JSX} from "react";
import { useTranslation } from "react-i18next";
import { ROUTE_PATH } from "~/common/constants/constants";
import { Button } from "../elements/Button";

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
            <Button
                title={`${t('service_name')}`}
                className={{
                    bgColor: '',
                    fontSize: 'text-4xl',
                    fontColor: 'text-white',
                    fontWeight: 'font-bold',
                }}
                onClick={() => navigate(ROUTE_PATH.ROOT)}>
            </Button>
            <label className="text-xs text-white">© 2024 Jin</label>
        </div>
    )
}