import { useState, useEffect } from "react";
import type { PerformanceForSubject } from "../types";
import { getPerformancePerSubject } from "../api/subjects";
import { handleDefaultErrors } from "../api/utils";

export default function usePerformancePerSubject() {
    const [data, setData] = useState<PerformanceForSubject[]>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await getPerformancePerSubject();
                setData(res);
            } catch (error) {
                setError(handleDefaultErrors(error));
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, isLoading, error };
}
