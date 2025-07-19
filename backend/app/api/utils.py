from datetime import datetime

import pandas as pd
from fastapi import HTTPException, status

from app.schemas.classes import ProgressSumForColumn


def filter_df_by_timerange(
    df: pd.DataFrame,
    date_str: str,
    start_time_str: str,
    end_time_str: str,
    column="SubmitDateTime",
):
    start_time = f"{date_str}T{start_time_str}"
    end_time = f"{date_str}T{end_time_str}"
    start_dt = datetime.fromisoformat(
        start_time,
    )
    end_dt = datetime.fromisoformat(end_time)

    if start_dt > end_dt:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Opgegeven start tijd is na de eind tijd",
        )

    return df.loc[(df[column] >= start_dt) & (df[column] <= end_dt)]


def filter_df_by_user_id(df: pd.DataFrame, user_id: str):
    res = df[df["UserId"] == int(user_id)]

    return res


def get_progress_groupedby_column(
    df: pd.DataFrame, column: str
) -> list[ProgressSumForColumn]:
    progress_counts_df = df.groupby(column, as_index=False)["Progress"].sum()

    progress_column_objs = []
    for _, row in progress_counts_df.iterrows():
        progress_column_objs.append(
            ProgressSumForColumn(
                column=str(row[column]), progress_sum=int(row["Progress"])
            )
        )

    return progress_column_objs
