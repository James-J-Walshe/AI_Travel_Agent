# AI Travel Booking Agent

## Overview
This project implements an AI-powered travel booking system that:
- Collects travel requirements from both the company and the traveller
- Enforces company policies
- Matches traveller preferences
- Searches travel APIs for flights, hotels, and rentals
- Proposes compliant itineraries for approval
- Books travel upon approval

## Architecture
See `docs/architecture.png` for the system architecture.

## Features
- Company and traveller input gathering
- Policy enforcement
- AI preference matching
- Travel API integration
- Approval workflow
- Booking confirmation and calendar integration

## Installation
1. Clone this repository:
   ```bash
   git clone <repo_url>
   cd ai_travel_booking_agent
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Usage
Run the backend API server:
```bash
python src/main.py
```

## License
MIT License
