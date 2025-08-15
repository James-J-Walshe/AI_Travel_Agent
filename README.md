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

# AI Travel Booking Agent (Flask)

A minimal Flask backend scaffold for an AI-powered travel booking agent that collects inputs from a company (policy) and a traveller (preferences), matches against policy, searches a mock travel API, and simulates booking.

## Features
- REST endpoints:
  - `POST /company` — save company policy
  - `POST /traveller` — save traveller preferences
  - `GET /search` — policy-filtered mock options
  - `POST /book` — mock booking confirmation
- Modular services and utilities
- Config via `.env`

## Quick start

```bash
python -m venv venv
# Windows PowerShell:
.\venv\Scripts\Activate.ps1
# macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
cp .env.example .env

python src/main.py
Open: http://127.0.0.1:5000

## Example requests
Save policy (budget = 600):

curl -X POST http://127.0.0.1:5000/company \
  -H "Content-Type: application/json" \
  -d '{ "name":"Default Policy", "budget":600, "allowed_classes":["ECONOMY","PREMIUM_ECONOMY"] }'

## Save traveller:

curl -X POST http://127.0.0.1:5000/traveller \
  -H "Content-Type: application/json" \
  -d '{ "full_name":"Alex Example", "seat_preference":"aisle", "hotel_style":"business" }'

## Search:

curl http://127.0.0.1:5000/search

## Book:

curl -X POST http://127.0.0.1:5000/book \
  -H "Content-Type: application/json" \
  -d '{ "option_id": 2 }'
