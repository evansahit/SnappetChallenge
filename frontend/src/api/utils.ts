import type {
    ExerciseCountForDomain,
    ExerciseCountForSubject,
    PerformanceForSubject,
    ProgressSumForColumn,
    StudentCountForSubject,
} from "../types";

export function transformToClassProgressForColumn(data): ProgressSumForColumn {
    return {
        column: data.column,
        progressSum: data.progress_sum,
    };
}

export function transformToStudentCountForSubject(
    data
): StudentCountForSubject {
    return {
        subject: data.subject,
        studentCount: data.student_count,
    };
}

export function transformToExerciseCountForSubject(
    data
): ExerciseCountForSubject {
    return {
        subject: data.subject,
        exerciseCount: data.exercise_count,
    };
}

export function transformToExerciseCountForDomain(
    data
): ExerciseCountForDomain {
    return {
        domain: data.domain,
        exerciseCount: data.exercise_count,
    };
}

export function transformToPerformanceForSubject(data): PerformanceForSubject {
    return {
        subject: data.subject,
        correctCount: data.correct_count,
        errorCount: data.error_count,
    };
}

export function handleDefaultErrors(error) {
    let errorMessage = "Iets is misgegaan";

    if (error instanceof Error) {
        if (
            error.message === "Failed to fetch" ||
            error.message.includes("fetch") ||
            error.message.includes("NetworkError")
        ) {
            errorMessage = "Kon geen verbinding maken met de server";
        } else {
            errorMessage = error.message;
        }
    }

    return errorMessage;
}
