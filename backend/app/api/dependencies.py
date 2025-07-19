import pandas as pd
from fastapi import Query


def load_data_dep():
    df = pd.read_csv("data/work.csv")
    # parse datetime values
    df["SubmitDateTime"] = pd.to_datetime(df["SubmitDateTime"], format="ISO8601")

    return df


def shared_datetime_params_dep(
    date_str: str = Query(..., alias="date"),
    start_time_str: str = Query(..., alias="start-time"),
    end_time_str: str = Query(..., alias="end-time"),
):
    return {
        "date_str": date_str,
        "start_time_str": start_time_str,
        "end_time_str": end_time_str,
    }
