from fastapi import FastAPI, HTTPException
from typing import List, Optional
from .models import Project, ContactForm
from .database import PROJECTS, get_project_by_id
from .email import send_email

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Welcome to the Portfolio API"}

@app.get("/api/projects", response_model=List[Project])
async def get_projects(featured: Optional[bool] = None):
    if featured is not None:
        return [Project(**project) for project in PROJECTS if project["featured"] == featured]
    return [Project(**project) for project in PROJECTS]

@app.get("/api/projects/{project_id}", response_model=Project)
async def get_project(project_id: int):
    project = get_project_by_id(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return Project(**project)

@app.post("/api/contact")
async def contact(form: ContactForm):
    await send_email(form)
    return {"message": "Message sent successfully"}
