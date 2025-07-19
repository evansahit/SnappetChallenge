import pandas as pd
from fastapi import HTTPException, status

from app.api.utils import filter_df_by_timerange
from app.schemas.subjects import (
    ExerciseCountForDomain,
    ExerciseCountForSubject,
    PerformanceForSubject,
    StudentCountForSubject,
)


class SubjectService:
    @staticmethod
    def get_student_count_per_subject(
        date_str: str,
        start_time_str: str,
        end_time_str: str,
        work_df: pd.DataFrame,
    ) -> list[StudentCountForSubject]:
        filtered_df = filter_df_by_timerange(
            work_df, date_str, start_time_str, end_time_str
        )

        students_per_subject_df = (
            filtered_df.groupby("Subject", as_index=False)["UserId"]
            .nunique()
            .rename(columns={"UserId": "StudentCount"})
        )  # type: ignore

        students_per_subject_objs = []
        for _, row in students_per_subject_df.iterrows():
            students_per_subject_objs.append(
                StudentCountForSubject(
                    subject=str(row["Subject"]), student_count=int(row["StudentCount"])
                )
            )

        return students_per_subject_objs

    @staticmethod
    def get_exercise_count_per_subject(
        date_str: str,
        start_time_str: str,
        end_time_str: str,
        work_df: pd.DataFrame,
    ) -> list[ExerciseCountForSubject]:
        filtered_df = filter_df_by_timerange(
            work_df, date_str, start_time_str, end_time_str
        )

        exercise_count_per_subject_df = (
            filtered_df.groupby("Subject", as_index=False)["SubmittedAnswerId"]
            .nunique()
            .rename(columns={"SubmittedAnswerId": "ExerciseCount"})
        )  # type: ignore

        exercise_count_per_subject_objs = []
        for _, row in exercise_count_per_subject_df.iterrows():
            exercise_count_per_subject_objs.append(
                ExerciseCountForSubject(
                    subject=str(row["Subject"]),
                    exercise_count=int(row["ExerciseCount"]),
                )
            )

        return exercise_count_per_subject_objs

    @staticmethod
    def get_exercise_count_per_domain(
        date_str: str,
        start_time_str: str,
        end_time_str: str,
        work_df: pd.DataFrame,
    ) -> list[ExerciseCountForDomain]:
        filtered_df = filter_df_by_timerange(
            work_df, date_str, start_time_str, end_time_str
        )

        exercise_count_per_domain_df = (
            filtered_df.groupby("Domain", as_index=False)["SubmittedAnswerId"]
            .nunique()
            .rename(columns={"SubmittedAnswerId": "ExerciseCount"})
        )  # type: ignore

        exercise_count_per_domain_objs = []
        for _, row in exercise_count_per_domain_df.iterrows():
            exercise_count_per_domain_objs.append(
                ExerciseCountForDomain(
                    domain=str(row["Domain"]), exercise_count=int(row["ExerciseCount"])
                )
            )

        return exercise_count_per_domain_objs

    @staticmethod
    def get_performance_per_subject(
        date_str: str,
        start_time_str: str,
        end_time_str: str,
        work_df: pd.DataFrame,
    ) -> list[PerformanceForSubject]:
        filtered_df = filter_df_by_timerange(
            work_df, date_str, start_time_str, end_time_str
        )

        exercise_count_per_subject_df = (
            filtered_df.groupby("Subject", as_index=False)["SubmittedAnswerId"]
            .nunique()
            .rename(columns={"SubmittedAnswerId": "ExerciseCount"})
        )  # type: ignore

        correct_count_per_subject_df = filtered_df.groupby("Subject", as_index=False)[
            "Correct"
        ].sum()  # type: ignore

        if not (
            exercise_count_per_subject_df.shape[0]
            == correct_count_per_subject_df.shape[0]
        ):
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Iets is misgegaan bij het ophalen van de prestaties per vak",
            )

        performance_per_subject_objs = []
        for idx in range(correct_count_per_subject_df.shape[0]):
            subject = str(correct_count_per_subject_df.iloc[idx]["Subject"])
            correct_count = int(correct_count_per_subject_df.iloc[idx]["Correct"])
            error_count = (
                int(exercise_count_per_subject_df.iloc[idx]["ExerciseCount"])
                - correct_count
            )

            performance_per_subject_objs.append(
                PerformanceForSubject(
                    subject=subject,
                    correct_count=correct_count,
                    error_count=error_count,
                )
            )

        return performance_per_subject_objs
