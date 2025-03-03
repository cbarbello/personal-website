from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List, Optional
import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI(title="Portfolio API")

# CORS middleware to allow frontend to communicate with the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://yourdomain.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)