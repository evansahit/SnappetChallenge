import {
    API_URL_BASE,
    TARGET_DATE,
    TARGET_START_TIME,
    TARGET_END_TIME,
} from "../constants";
import type { ProgressSumForColumn } from "../types";
import { transformToClassProgressForColumn } from "./utils";

export async function getClassProgressPerSubject(
    dateQueryParam: string = TARGET_DATE,
    startTimeQueryPAram: string = TARGET_START_TIME,
    endTimeQueryParam: string = TARGET_END_TIME
): Promise<ProgressSumForColumn[]> {
    const endpoint = `/classes/progress_sum_per_subject?date=${dateQueryParam}&start-time=${startTimeQueryPAram}&end-time=${endTimeQueryParam}`;
    const url = API_URL_BASE + endpoint;

    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(
            error.detail ||
                "Ophalen van klassikale voortgang per vak is misgegaan."
        );
    }

    const json = await response.json();
    const res = json.map((element) =>
        transformToClassProgressForColumn(element)
    );

    return res;
}

export async function getClassProgressPerLearningObjective(
    dateQueryParam: string = TARGET_DATE,
    startTimeQueryPAram: string = TARGET_START_TIME,
    endTimeQueryParam: string = TARGET_END_TIME
) {
    const endpoint = `/classes/progress_sum_per_learning_objective?date=${dateQueryParam}&start-time=${startTimeQueryPAram}&end-time=${endTimeQueryParam}`;
    const url = API_URL_BASE + endpoint;

    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(
            error.detail ||
                "Ophalen van klassikale voortgang per leerdoel is mis gegaan."
        );
    }

    const json = await response.json();
    const res = json.map((element) =>
        transformToClassProgressForColumn(element)
    );

    return res;
}

export async function getProgressPerStudent(
    dateQueryParam: string = TARGET_DATE,
    startTimeQueryPAram: string = TARGET_START_TIME,
    endTimeQueryParam: string = TARGET_END_TIME
) {
    const endpoint = `/classes/progress_sum_per_student?date=${dateQueryParam}&start-time=${startTimeQueryPAram}&end-time=${endTimeQueryParam}`;
    const url = API_URL_BASE + endpoint;

    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(
            error.detail ||
                "Ophalen van voortgang per student in de klas is misgegaan."
        );
    }

    const json = await response.json();
    const res = json.map((element) =>
        transformToClassProgressForColumn(element)
    );

    return res;
}
