import pandas as pd

from app.api.utils import filter_df_by_timerange, get_progress_groupedby_column
from app.schemas.classes import ProgressSumForColumn


class ClassService:
    @staticmethod
    def get_progress_sum_per_subject(
        date_str: str,
        start_time_str: str,
        end_time_str: str,
        work_df: pd.DataFrame,
    ) -> list[ProgressSumForColumn]:
        filtered_df = filter_df_by_timerange(
            work_df, date_str, start_time_str, end_time_str
        )

        return get_progress_groupedby_column(filtered_df, "Subject")

    @staticmethod
    def get_progress_sum_per_learning_objective(
        date_str: str,
        start_time_str: str,
        end_time_str: str,
        work_df: pd.DataFrame,
    ) -> list[ProgressSumForColumn]:
        filtered_df = filter_df_by_timerange(
            work_df, date_str, start_time_str, end_time_str
        )

        return get_progress_groupedby_column(filtered_df, "LearningObjective")

    @staticmethod
    def get_progress_sum_per_student(
        date_str: str,
        start_time_str: str,
        end_time_str: str,
        work_df: pd.DataFrame,
    ) -> list[ProgressSumForColumn]:
        filtered_df = filter_df_by_timerange(
            work_df, date_str, start_time_str, end_time_str
        )

        return get_progress_groupedby_column(filtered_df, "UserId")
