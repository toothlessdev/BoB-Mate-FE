import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export enum FetchStatus {
    IDLE = "IDLE",
    PENDING = "PENDING",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
}

export interface IUseFetch {
    status: FetchStatus;
    error: any;
    data: any;
}

export const useAuthenticatedFetch = (API_URL: string): IUseFetch => {
    const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE);
    const [error, setError] = useState<any>(null);
    const [data, setData] = useState<any>(null);

    const navigate = useNavigate();
    const fetchData = useCallback(async () => {
        try {
            if (!localStorage.getItem("token")) {
                throw new Error("로그인 하지 않은 사용자 접근");
            }
            setStatus(FetchStatus.PENDING);
            const response = await fetch(API_URL + `?token=${localStorage.getItem("token")}`);
            const data = await response.json();
            setStatus(FetchStatus.SUCCESS);
            setData(data);
        } catch (err) {
            setStatus(FetchStatus.FAILED);
            setData(null);
            setError(err);

            console.log(err);

            alert("로그인 해주세요");
            navigate("/auth/signin");
        }
    }, [API_URL]);

    useEffect(() => {
        fetchData();
    }, []);

    return { status, error, data };
};

export default function useFetch(API_URL: string): IUseFetch {
    const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE);
    const [error, setError] = useState<any>(null);
    const [data, setData] = useState<any>(null);

    const fetchData = useCallback(async () => {
        try {
            setStatus(FetchStatus.PENDING);
            const response = await fetch(API_URL);
            const data = await response.json();
            setStatus(FetchStatus.SUCCESS);
            setData(data);
        } catch (err) {
            setError(err);
        }
    }, [API_URL]);

    useEffect(() => {
        fetchData();
    }, []);

    return { status, error, data };
}
