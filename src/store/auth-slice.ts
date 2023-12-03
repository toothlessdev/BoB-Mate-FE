import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
    isLogin: boolean;
    token: string;
    userImg: string;
    userName: string;
}

export const initialState: IAuthState = {
    isLogin: false,
    token: "",
    userImg: "",
    userName: "",
};

export const authSlice = createSlice({
    name: "auth-slice",

    initialState,

    reducers: {
        setUser: (state, action: PayloadAction<IAuthState>) => {
            state = action.payload;
        },
        setToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload;
        },
        setUserImg: (state, action: PayloadAction<string>) => {
            state.userImg = action.payload;
        },
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload;
        },
    },
});

export const authActions = authSlice.actions;
