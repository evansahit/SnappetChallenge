from typing import Annotated

import pandas as pd
from fastapi import APIRouter, Depends, status

from app.api.dependencies import load_data_dep, shared_datetime_params_dep
from app.schemas.subjects import (
    ExerciseCountForDomain,
    ExerciseCountForSubject,
    PerformanceForSubject,
    StudentCountForSubject,
)
from app.service.subject_service import SubjectService

router = APIRouter(prefix="/subjects")


@router.get(
    "/student-count-per-subject",
    response_model=list[StudentCountForSubject],
    status_code=status.HTTP_200_OK,
)
async def get_student_count_per_subject(
    shared_dt_params: Annotated[dict, Depends(shared_datetime_params_dep)],
    work_df: Annotated[pd.DataFrame, Depends(load_data_dep)],
):
    return SubjectService.get_student_count_per_subject(
        shared_dt_params["date_str"],
        shared_dt_params["start_time_str"],
        shared_dt_params["end_time_str"],
        work_df,
    )


@router.get(
    "/exercise-count-per-subject",
    response_model=list[ExerciseCountForSubject],
    status_code=status.HTTP_200_OK,
)
async def get_exercise_count_per_subject(
    shared_dt_params: Annotated[dict, Depends(shared_datetime_params_dep)],
    work_df: Annotated[pd.DataFrame, Depends(load_data_dep)],
):
    return SubjectService.get_exercise_count_per_subject(
        shared_dt_params["date_str"],
        shared_dt_params["start_time_str"],
        shared_dt_params["end_time_str"],
        work_df,
    )


@router.get(
    "/exercise-count-per-domain",
    response_model=list[ExerciseCountForDomain],
    status_code=status.HTTP_200_OK,
)
async def get_exercise_count_per_domain(
    shared_dt_params: Annotated[dict, Depends(shared_datetime_params_dep)],
    work_df: Annotated[pd.DataFrame, Depends(load_data_dep)],
):
    return SubjectService.get_exercise_count_per_domain(
        shared_dt_params["date_str"],
        shared_dt_params["start_time_str"],
        shared_dt_params["end_time_str"],
        work_df,
    )


@router.get(
    "/performance-per-subject",
    response_model=list[PerformanceForSubject],
    status_code=status.HTTP_200_OK,
)
async def get_performance_per_subject(
    shared_dt_params: Annotated[dict, Depends(shared_datetime_params_dep)],
    work_df: Annotated[pd.DataFrame, Depends(load_data_dep)],
):
    return SubjectService.get_performance_per_subject(
        shared_dt_params["date_str"],
        shared_dt_params["start_time_str"],
        shared_dt_params["end_time_str"],
        work_df,
    )
