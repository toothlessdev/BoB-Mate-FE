import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Dispatch } from "@reduxjs/toolkit";
import { authActions } from "../store/auth-slice";
import { API_BASE_URL } from "../constants/api";
import { useNavigate } from "react-router-dom";

export const useToken = () => {
    const dispatch: Dispatch = useDispatch();
    const naviagte = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            dispatch(authActions.setToken(localStorage.getItem("token")));

            const request = async () => {
                try {
                    const response = await fetch(API_BASE_URL + "/account/profile", {
                        method: "GET",
                        headers: {
                            token: localStorage.getItem("token"),
                        },
                    });
                    if (!response.ok) throw new Error("/account/profile Request Failed");
                    const data = await response.json();
                    return data;
                } catch (err) {
                    alert("다시 로그인 해주세요");
                    naviagte("/auth/signin");
                }
            };

            request();
        } else {
            alert("다시 로그인 해주세요");
            naviagte("/auth/signin");
        }
    }, [localStorage.getItem("token")]);
};
