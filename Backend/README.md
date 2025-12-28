# Users — Register Endpoint 🧾

## Endpoint

- **URL:** `/api/users/register`
- **Method:** `POST`
- **Content-Type:** `application/json`

---

## Description

Creates a new user account. The endpoint validates the payload, hashes the password, stores the user in the database, and returns a JWT token plus the created user object (password excluded).

---

## Request body (JSON)

Required JSON structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "Password123"
}
```

Validation rules:
- `fullname.firstname` — string, minimum 3 characters
- `fullname.lastname` — string, minimum 3 characters
- `email` — valid email format
- `password` — minimum 6 characters (project may enforce additional complexity)

> Tip: Include header `Content-Type: application/json` and ensure the JSON is valid.

---

## Responses

| Status | Meaning | Example body |
|---|---|---|
| **201 Created** ✅ | User created successfully | `{ "token": "<jwt>", "user": { "_id": "...", "fullname": {"firstname":"John","lastname":"Doe"}, "email":"john@example.com" } }` |
| **400 Bad Request** ⚠️ | Validation failed | `{ "errors": [ { "msg": "Invalid email format", "param": "email", "location": "body" } ] }` |
| **500 Internal Server Error** ⚠️ | Unexpected server or DB error | `{ "error": "error message" }` |

---

## Example (curl)

```bash
curl -X POST http://localhost:4000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{"fullname":{"firstname":"Jane","lastname":"Doe"},"email":"jane@example.com","password":"Password123"}'
```

---

## Notes & Troubleshooting 🔧

- Confirm the server runs on the port set in `.env` (e.g., `PORT=4000`).
- Ensure the token secret is configured (`JWT_SECRET_KEY` or update code to use `JWT_SECRET`).
- If you see `Cannot POST /users/register`, post to `/api/users/register` (route is mounted at `/api/users`).
- Use the `errors` array in 400 responses to fix validation issues.

---
