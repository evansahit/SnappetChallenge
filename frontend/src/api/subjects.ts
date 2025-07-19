import {
    API_URL_BASE,
    TARGET_DATE,
    TARGET_START_TIME,
    TARGET_END_TIME,
} from "../constants";
import {
    transformToExerciseCountForDomain,
    transformToExerciseCountForSubject,
    transformToPerformanceForSubject,
    transformToStudentCountForSubject,
} from "./utils";

export async function getStudentCountPerSubject(
    dateQueryParam: string = TARGET_DATE,
    startTimeQueryPAram: string = TARGET_START_TIME,
    endTimeQueryParam: string = TARGET_END_TIME
) {
    const endpoint = `/subjects/student-count-per-subject?date=${dateQueryParam}&start-time=${startTimeQueryPAram}&end-time=${endTimeQueryParam}`;
    const url = API_URL_BASE + endpoint;

    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(
            error.detail ||
                "Ophalen van het aantal studenten die gewerkt hebben aan elke vak is misgegaan."
        );
    }

    const json = await response.json();
    const res = json.map((element) =>
        transformToStudentCountForSubject(element)
    );

    return res;
}

export async function getExerciseCountPerSubject(
    dateQueryParam: string = TARGET_DATE,
    startTimeQueryPAram: string = TARGET_START_TIME,
    endTimeQueryParam: string = TARGET_END_TIME
) {
    const endpoint = `/subjects/exercise-count-per-subject?date=${dateQueryParam}&start-time=${startTimeQueryPAram}&end-time=${endTimeQueryParam}`;
    const url = API_URL_BASE + endpoint;

    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(
            error.detail ||
                "Ophalen van het oefeningen gemaakt per vak is misgegaan."
        );
    }

    const json = await response.json();
    const res = json.map((element) =>
        transformToExerciseCountForSubject(element)
    );

    return res;
}

export async function getExerciseCountPerDomain(
    dateQueryParam: string = TARGET_DATE,
    startTimeQueryPAram: string = TARGET_START_TIME,
    endTimeQueryParam: string = TARGET_END_TIME
) {
    const endpoint = `/subjects/exercise-count-per-domain?date=${dateQueryParam}&start-time=${startTimeQueryPAram}&end-time=${endTimeQueryParam}`;
    const url = API_URL_BASE + endpoint;

    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(
            error.detail ||
                "Ophalen van het oefeningen gemaakt per domein is misgegaan."
        );
    }

    const json = await response.json();
    const res = json.map((element) =>
        transformToExerciseCountForDomain(element)
    );

    return res;
}

export async function getPerformancePerSubject(
    dateQueryParam: string = TARGET_DATE,
    startTimeQueryPAram: string = TARGET_START_TIME,
    endTimeQueryParam: string = TARGET_END_TIME
) {
    const endpoint = `/subjects/performance-per-subject?date=${dateQueryParam}&start-time=${startTimeQueryPAram}&end-time=${endTimeQueryParam}`;
    const url = API_URL_BASE + endpoint;

    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(
            error.detail || "Oefenen van prestaties per vak is misgegaan."
        );
    }

    const json = await response.json();
    const res = json.map((element) =>
        transformToPerformanceForSubject(element)
    );

    return res;
}
