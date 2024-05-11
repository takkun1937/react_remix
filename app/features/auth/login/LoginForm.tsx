import {JSX} from "react";
import { ContentLayout } from "~/components/layout/ContentLayout";
import {useTranslation} from "react-i18next";
import { useNavigate } from "@remix-run/react";
import { ROUTE_PATH } from "~/common/constants/constants";
import { Button } from "~/components/elements/Button";

/**
 * ログインフォームのコンポーネント
 * @returns
 */
export const LoginForm = (): JSX.Element => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    
    return (
        <ContentLayout title={`${t('title.login')}`}>
            <div className="flex flex-col justify-center items-center grow px-8 bg-gray-100">
                <form className="text-center">
                    <p className="text-4xl font-bold">{`${t('service_name')} ${t('main.login_msg')}`}</p>
                    <p className="my-6 text-xl text-gray-500">{`${t('main.login_lead')}`}</p>
                    <div className="flex flex-col items-center">
                        <input type="text" placeholder={`${t('main.placeholder_username_email')}`} autoFocus={true} required
                            className="w-96 mt-2.5 px-4 py-1.5 border border-gray-400 border-solid rounded text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"/>
                        <input type="password" placeholder={`${t('main.placeholder_password')}`} required
                            className="w-96 mt-2.5 px-4 py-1.5 border border-gray-400 border-solid rounded text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"/>
                        <Button
                            title={`${t('service_name')} ${t('button.login_msg')}`}
                            className={{
                                bgColor: 'bg-green-500',
                                fontSize: 'text-base',
                                fontColor: 'text-white',
                                fontWeight: 'font-bold',
                                hoverColor: 'bg-green-700',
                                props: 'w-96 my-2.5'
                            }}
                            onClick={() => navigate(ROUTE_PATH.ROOT)}>
                        </Button>
                        <p className="text-sm text-gray-500">
                            {`${t('service_name')} のアカウントを持っていない場合は`}
                            <a className="text-blue-500" href={ROUTE_PATH.SIGNUP}>{`${t('button.signup')}`}</a>
                            へ
                        </p>
                    </div>
                </form>
            </div>
        </ContentLayout>
    );
}