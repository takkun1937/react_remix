import {JSX, MouseEvent, MouseEventHandler} from "react";

/**
 * ボタンコンポーネント
 * @property type - ボタン種類
 * @property title - ボタンタイトル
 * @property className - ボタンクラスネーム
 * @property onClick - ボタンクリック
 */
export type ButtonProps = {
    type?: 'button' | 'submit' | 'reset',
    title: string,
    className: {
        bgColor: string,
        fontSize: string,
        fontColor: string,
        fontWeight?: string,
        hoverColor?: string,
        props?: string
    },
    onClick: MouseEventHandler<HTMLButtonElement>
}

/**
 * ボタンコンポーネント
 * @param props ボタンタイプ
 * @return JSX.Element
 */
export const Button = (props: ButtonProps): JSX.Element => {

    const handlerClick = (e: MouseEvent<HTMLButtonElement>) => {
        props.onClick(e);
    }

    return (
        <button
            className={`px-4 py-1.5 rounded ${props.className.bgColor} ${props.className.fontSize} ${props.className.fontColor} ${props.className.fontWeight} hover:${props.className.hoverColor} ${props.className.props}`}
            type={props.type}  
            onClick={handlerClick}>
                {props.title}
        </button>
    );
}