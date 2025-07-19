import pandas as pd

from app.api.utils import (
    filter_df_by_timerange,
    filter_df_by_user_id,
)
from app.schemas.students import StudentProgressForSubject


class StudentService:
    @staticmethod
    def get_progress_per_subject(
        user_id: str,
        date_str: str,
        start_time_str: str,
        end_time_str: str,
        work_df: pd.DataFrame,
    ) -> list[StudentProgressForSubject]:
        filtered_df = filter_df_by_timerange(
            work_df, date_str, start_time_str, end_time_str
        )
        filtered_df = filter_df_by_user_id(filtered_df, user_id)

        progress_per_subject_df = filtered_df.groupby("Subject", as_index=False)[
            "Progress"
        ].sum()

        progress_per_subject_objs = []
        for _, row in progress_per_subject_df.iterrows():
            progress_per_subject_objs.append(
                StudentProgressForSubject(
                    user_id=user_id,
                    subject=str(row["Subject"]),
                    progress_sum=int(row["Progress"]),
                )
            )

        return progress_per_subject_objs
