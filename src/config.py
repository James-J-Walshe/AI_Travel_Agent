import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY", "demo_key")
PORT = int(os.getenv("PORT", "5000"))
