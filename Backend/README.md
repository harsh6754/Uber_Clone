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

### Example response (201 Created)

```json
{
  "token": "<jwt>",
  "user": {
    "_id": "64abc123def4567890",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane@example.com"
  }
}
```

---

## Notes & Troubleshooting 🔧

- Confirm the server runs on the port set in `.env` (e.g., `PORT=4000`).
- Ensure the token secret is configured (`JWT_SECRET_KEY` or update code to use `JWT_SECRET`).
- If you see `Cannot POST /users/register`, post to `/api/users/register` (route is mounted at `/api/users`).
- Use the `errors` array in 400 responses to fix validation issues.

---

# Users — Login Endpoint 🔐

## Endpoint

- **URL:** `/api/users/login`
- **Method:** `POST`
- **Content-Type:** `application/json`

---

## Description

Authenticates an existing user and returns a JWT token along with the user object (password excluded). The endpoint validates credentials and returns appropriate status codes for invalid input or authentication failure.

---

## Request body (JSON)

Required JSON structure:

```json
{
  "email": "john@example.com",
  "password": "Password123"
}
```

Validation rules:
- `email` — valid email format
- `password` — present and non-empty

> Tip: Include header `Content-Type: application/json` and ensure the request body is valid JSON.

---

## Responses

| Status | Meaning | Example body |
|---|---|---|
| **200 OK** ✅ | Authentication successful | `{ "token": "<jwt>", "user": { "_id": "...", "fullname": {"firstname":"John","lastname":"Doe"}, "email":"john@example.com" } }` |
| **400 Bad Request** ⚠️ | Validation failed | `{ "errors": [ { "msg": "Invalid email format", "param": "email", "location": "body" } ] }` |
| **401 Unauthorized** ⚠️ | Invalid credentials | `{ "error": "Invalid email and password" }` |
| **500 Internal Server Error** ⚠️ | Unexpected server or DB error | `{ "error": "error message" }` |

---

## Example (curl)

```bash
curl -X POST http://localhost:4000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"jane@example.com","password":"Password123"}'
```

### Example response (200 OK)

```json
{
  "token": "<jwt>",
  "user": {
    "_id": "64abc123def4567890",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane@example.com"
  }
}
```

---

## Notes

- Login returns the same JWT token format that is used for authenticated routes.
- A `401` response indicates the email/password pair did not match an existing user.
- Ensure you are sending a `Content-Type: application/json` header and valid JSON body.

---

## Profile Endpoint 🧾

- **URL:** `/api/users/profile`
- **Method:** `GET`
- **Authentication:** Requires a valid JWT token (send as `Authorization: Bearer <token>` or as a `token` cookie).

---

### Description

Returns the authenticated user's profile information (user object without the password).

### Responses

| Status | Meaning | Example body |
|---|---|---|
| **200 OK** ✅ | Profile retrieved successfully | `{ "_id": "...", "fullname": {"firstname":"John","lastname":"Doe"}, "email":"john@example.com", "socketId": "..." }` |
| **401 Unauthorized** ⚠️ | Missing, invalid, or blacklisted token | `{ "error": "User Unauthorized" }` |
| **500 Internal Server Error** ⚠️ | Unexpected server or DB error | `{ "error": "error message" }` |

### Example (curl)

```bash
curl -X GET http://localhost:4000/api/users/profile \
  -H "Authorization: Bearer <token>"
```

### Example response (200 OK)

```json
{
  "_id": "64abc123def4567890",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane@example.com",
  "socketId": "abc123socketid"
}
```

---

## Logout Endpoint 🔒

- **URL:** `/api/users/logout`
- **Method:** `GET`
- **Authentication:** Requires a valid JWT token.

---

### Description

Logs out the authenticated user by clearing the `token` cookie and adding the token to the blacklist (token is stored in the blacklist collection and expires after 24 hours).

### Responses

| Status | Meaning | Example body |
|---|---|---|
| **200 OK** ✅ | Successfully logged out | `{ "message": "Logged out successfully" }` |
| **401 Unauthorized** ⚠️ | Missing, invalid, or blacklisted token | `{ "error": "User Unauthorized" }` |
| **500 Internal Server Error** ⚠️ | Unexpected server or DB error | `{ "error": "error message" }` |

### Example (curl)

```bash
curl -X GET http://localhost:4000/api/users/logout \
  -H "Authorization: Bearer <token>"
```

### Example response (200 OK)

```json
{
  "message": "Logged out successfully"
}
```

---
