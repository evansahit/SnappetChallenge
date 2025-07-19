import { useState, useEffect } from "react";
import { getClassProgressPerLearningObjective } from "../api/classes";
import type { ProgressSumForColumn } from "../types";
import { handleDefaultErrors } from "../api/utils";

export default function useClassProgressPerLearningObjective() {
    const [data, setData] = useState<ProgressSumForColumn[]>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await getClassProgressPerLearningObjective();
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
