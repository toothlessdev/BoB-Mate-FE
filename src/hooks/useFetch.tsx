import { useCallback, useEffect, useState } from "react";

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
