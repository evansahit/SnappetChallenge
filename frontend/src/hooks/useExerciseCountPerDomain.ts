import { useState, useEffect } from "react";
import type { ExerciseCountForDomain } from "../types";
import { getExerciseCountPerDomain } from "../api/subjects";
import { handleDefaultErrors } from "../api/utils";

export default function useExerciseCountPerDomain() {
    const [data, setData] = useState<ExerciseCountForDomain[]>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await getExerciseCountPerDomain();
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
