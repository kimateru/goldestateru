import { useCallback, useState, useEffect } from "react";

interface UseAppwriteOptions<T, P extends Record<string, string | number>> { 
    fn:(params:any) => Promise<any>;
    params?:any;
    skip?:boolean;
}

interface UseAppwriteReturn<T, P> {
    data: T | null;
    loading: boolean;
    error: string | null;
    refetch: (params?: P) => Promise<void>;
}

export const useAppwrite = <T, P extends Record<string, string | number>>({
    fn,
    params = {} as P,
    skip = false,
}: UseAppwriteOptions<T, P>): UseAppwriteReturn<T, P> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(
        async (fetchParams?: P) => {
            setLoading(true);
            setError(null);
            try {
                const result = await fn({fetchParams});
                setData(result);
            } catch (err) {
                setError(err as string);
            } finally {
                setLoading(false);
            }
        },
        [fn]
    );

    useEffect(() => {
        if (!skip) {
            fetchData(params);
        }
    }, []); 

    const refetch = async (fetchParams?: P) => await fetchData(fetchParams);

    return { data, loading, error, refetch };
}
