import { useState, useEffect } from "react";
import type { ExerciseCountForDomain } from "../types";
import { getExerciseCountPerSubject } from "../api/subjects";
import { handleDefaultErrors } from "../api/utils";

export default function useExerciseCountPerSubject() {
    const [data, setData] = useState<ExerciseCountForDomain[]>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await getExerciseCountPerSubject();
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
