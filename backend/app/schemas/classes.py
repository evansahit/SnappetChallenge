from pydantic import BaseModel


class ProgressSumForColumn(BaseModel):
    column: str
    progress_sum: int
