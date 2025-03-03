from email.message import EmailMessage
from http.client import HTTPException
import os
import smtplib

from backend.app.models import ContactForm

# def get_project_by_id(project_id: int):
#     for project in PROJECTS:
#         if project["id"] == project_id:
#             return project
#     return None

async def send_email(contact: ContactForm):
    """Send an email using the SMTP server."""
    # Get email configuration from environment variables
    smtp_server = os.getenv("SMTP_SERVER")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_username = os.getenv("SMTP_USERNAME")
    smtp_password = os.getenv("SMTP_PASSWORD")
    to_email = os.getenv("CONTACT_EMAIL")
    
    if not all([smtp_server, smtp_port, smtp_username, smtp_password, to_email]):
        raise HTTPException(status_code=500, detail="Email configuration is incomplete")
    
    try:
        # Create the email message
        msg = EmailMessage()
        msg["Subject"] = f"Portfolio Contact: {contact.name}"
        msg["From"] = smtp_username
        msg["To"] = to_email
        
        # Email content
        email_content = f"""
        Name: {contact.name}
        Email: {contact.email}
        
        Message:
        {contact.message}
        """
        msg.set_content(email_content)
        
        # Send the email
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_username, smtp_password)
            server.send_message(msg)
            
        return True
    except Exception as e:
        print(f"Failed to send email: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to send email")