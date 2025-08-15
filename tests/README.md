# AI Travel Agent API – Postman Testing Guide

This guide explains how to use the included **Postman Collection** and **Postman Environment** to test the AI Travel Agent API.

---

## 📂 Files Included

- **AI_Travel_Agent.postman_collection.json**  
  Contains all API requests (endpoints) for testing.

- **AI_Travel_Agent_Env.postman_environment.json**  
  Contains reusable variables like `base_url`, `company_name`, `traveller_name`, etc.

---

## 🚀 Prerequisites

1. **Postman Installed**  
   Download from [https://www.postman.com/downloads/](https://www.postman.com/downloads/).

2. **API Running Locally or Remotely**  
   - Local: Start your API (default: `http://127.0.0.1:5000`)
   - Remote: Make sure the API URL is publicly accessible.

---

## 📥 Importing the Files into Postman

### 1️⃣ Import the Environment
- Open Postman.
- Go to **Environments** (gear icon → "Manage Environments").
- Click **Import**.
- Select `AI_Travel_Agent_Env.postman_environment.json`.

### 2️⃣ Import the Collection
- In Postman, click **Import** (top-left).
- Select `AI_Travel_Agent.postman_collection.json`.

---

## 🔄 Selecting the Environment
In the **top-right corner** of Postman:
- Choose `AI Travel Agent Environment` from the environment dropdown.

---

## 🧪 Testing the Endpoints

The collection contains these endpoints:

1. **Health Check**  
   `GET {{base_url}}/`  
   Checks if the API is running.

2. **Set Company Policy**  
   `POST {{base_url}}/company`  
   Uses `company_name` and `company_policy` from the environment.

3. **Set Traveller Preferences**  
   `POST {{base_url}}/traveller`  
   Uses `traveller_name` and `seat_pref` from the environment.

4. **Search Travel Options**  
   `GET {{base_url}}/search`  
   Returns available trips.

5. **Book Trip**  
   `POST {{base_url}}/book`  
   Uses `option_id` and `booking_notes` from the environment.

---

## ✏️ Editing Variables

You can change variables without editing each request:

- Click the **eye icon** (environment quick look).
- Click **Edit** next to `AI Travel Agent Environment`.
- Update values like `base_url`, `company_name`, `option_id`.
- Save changes → they apply to all requests using those variables.

---

## 🌐 Switching Between Local & Production

Change `base_url` in the environment:
- Local: `http://127.0.0.1:5000`
- Production: `https://api.yourdomain.com`

---

## ✅ Tips

- Always run **Health Check** first to confirm the API is reachable.
- If you change variables, re-run the related request to see the updated results.
- Keep these JSON files in GitHub so anyone can clone and import them.

---

**Author:** James Walshe  
**Date:** 2025-08-15
