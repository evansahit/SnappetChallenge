from typing import Annotated

import pandas as pd
from fastapi import APIRouter, Depends, status

from app.api.dependencies import load_data_dep, shared_datetime_params_dep
from app.schemas.students import StudentProgressForSubject
from app.service.student_service import StudentService

router = APIRouter(prefix="/students")


@router.get(
    "/progress-per-subject",
    response_model=list[StudentProgressForSubject],
    status_code=status.HTTP_200_OK,
)
async def get_progress_per_subject(
    user_id: str,
    shared_dt_params: Annotated[dict, Depends(shared_datetime_params_dep)],
    work_df: Annotated[pd.DataFrame, Depends(load_data_dep)],
):
    return StudentService.get_progress_per_subject(
        user_id,
        shared_dt_params["date_str"],
        shared_dt_params["start_time_str"],
        shared_dt_params["end_time_str"],
        work_df,
    )
