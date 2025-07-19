from pydantic import BaseModel


class StudentCountForSubject(BaseModel):
    subject: str
    student_count: int


class ExerciseCountForSubject(BaseModel):
    subject: str
    exercise_count: int


class ExerciseCountForDomain(BaseModel):
    domain: str
    exercise_count: int


class PerformanceForSubject(BaseModel):
    subject: str
    correct_count: int
    error_count: int
