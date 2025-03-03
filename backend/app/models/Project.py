from typing import List, Optional
from pydantic import BaseModel


class Project(BaseModel):
    id: int
    title: str
    description: str
    technologies: List[str]
    image_url: str
    github_url: str
    live_url: Optional[str] = None
    featured: bool = False
