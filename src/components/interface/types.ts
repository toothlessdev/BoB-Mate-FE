export interface IButton {
    type: "primary-stroke" | "primary-fill";
    width?: string;
    height?: string;
    children?: React.ReactNode;
    [key: string]: any;
}

export interface ISocialLoginButton {
    type: "google" | "naver" | "kakao";
    [key: string]: any;
}

export interface IForm {
    children: React.ReactNode;
    width?: string;
    height?: string;
    [key: string]: any;
}

export interface IInput {
    width?: string;
    height?: string;
    [key: string]: any;
}

export interface IInputContainer {
    label: string;
    type?: string;
    placeholder?: string;
    btnRequired?: boolean;
    btnLabel?: string;
    onClick?: React.MouseEventHandler;
    [key: string]: any;
}

export interface IInputDate {
    label: string;
    getDate: IDate;
    setDate: React.Dispatch<React.SetStateAction<IDate>>;
}

export interface IDate {
    year: number;
    month: number;
    date: number;
    hour: number;
    minute: number;
}

export interface ILabel {
    children?: React.ReactNode;
    [key: string]: any;
}

export interface IModal {
    title: string;
    children: React.ReactNode;
    getModalState: boolean;
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}
