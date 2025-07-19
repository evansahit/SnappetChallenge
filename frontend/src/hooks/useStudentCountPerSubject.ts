import { useState, useEffect } from "react";
import type { StudentCountForSubject } from "../types";
import { getStudentCountPerSubject } from "../api/subjects";
import { handleDefaultErrors } from "../api/utils";

export default function useStudentCountPerSubject() {
    const [data, setData] = useState<StudentCountForSubject[]>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await getStudentCountPerSubject();
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
