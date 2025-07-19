export type ProgressSumForColumn = {
    column: string;
    progressSum: number;
};

export type StudentCountForSubject = {
    subject: string;
    studentCount: number;
};

export type ExerciseCountForSubject = {
    subject: string;
    exerciseCount: number;
};

export type ExerciseCountForDomain = {
    domain: string;
    exerciseCount: number;
};

export type PerformanceForSubject = {
    subject: string;
    correctCount: number;
    errorCount: number;
};
