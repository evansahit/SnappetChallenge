from fastapi import APIRouter

from app.api.routes import classes, students, subjects

router = APIRouter()
router.include_router(classes.router, tags=["Classes"])
router.include_router(subjects.router, tags=["Subjects"])
router.include_router(students.router, tags=["Students"])
