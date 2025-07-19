from pydantic import BaseModel


class StudentProgressForSubject(BaseModel):
    user_id: str
    subject: str
    progress_sum: int
