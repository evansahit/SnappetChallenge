from typing import Annotated

import pandas as pd
from fastapi import APIRouter, Depends, status

from app.api.dependencies import load_data_dep, shared_datetime_params_dep
from app.schemas.classes import ProgressSumForColumn
from app.service.class_service import ClassService

router = APIRouter(prefix="/classes")


@router.get(
    "/progress_sum_per_subject",
    response_model=list[ProgressSumForColumn],
    status_code=status.HTTP_200_OK,
)
async def get_progress_sum_per_subject(
    shared_dt_params: Annotated[dict, Depends(shared_datetime_params_dep)],
    work_df: Annotated[pd.DataFrame, Depends(load_data_dep)],
):
    return ClassService.get_progress_sum_per_subject(
        shared_dt_params["date_str"],
        shared_dt_params["start_time_str"],
        shared_dt_params["end_time_str"],
        work_df,
    )


@router.get(
    "/progress_sum_per_learning_objective",
    response_model=list[ProgressSumForColumn],
    status_code=status.HTTP_200_OK,
)
async def get_progress_sum_per_learning_objective(
    shared_dt_params: Annotated[dict, Depends(shared_datetime_params_dep)],
    work_df: Annotated[pd.DataFrame, Depends(load_data_dep)],
):
    return ClassService.get_progress_sum_per_learning_objective(
        shared_dt_params["date_str"],
        shared_dt_params["start_time_str"],
        shared_dt_params["end_time_str"],
        work_df,
    )


@router.get(
    "/progress_sum_per_student",
    response_model=list[ProgressSumForColumn],
    status_code=status.HTTP_200_OK,
)
async def get_progress_sum_per_student(
    shared_dt_params: Annotated[dict, Depends(shared_datetime_params_dep)],
    work_df: Annotated[pd.DataFrame, Depends(load_data_dep)],
):
    return ClassService.get_progress_sum_per_student(
        shared_dt_params["date_str"],
        shared_dt_params["start_time_str"],
        shared_dt_params["end_time_str"],
        work_df,
    )
