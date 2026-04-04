# Users Register Endpoint

This document describes the `POST /users/register` endpoint used to create a new user account in the backend.

## Endpoint

- `POST /users/register`

## Description

Registers a new user with first name, last name, email, and password. The endpoint validates the request body and returns a JSON response with a JWT token and the created user data on success.

## Required Request Body

The request body must be JSON and include the following fields:

- `fullname.firstname` (string): user's first name, minimum length 3 characters
- `fullname.lastname` (string): user's last name, minimum length 3 characters
- `email` (string): valid email address
- `password` (string): password with minimum length 6 characters

### Example JSON body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## Success Response

- Status: `201 Created`
- Content type: `application/json`

### Example success response

```json
{
  "token": "<jwt_token_here>",
  "user": {
    "_id": "<user_id_here>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

> Note: The actual response may include user fields depending on the model and how the route sends the user object.

## Error Responses

### Validation error
- Status: `400 Bad Request`
- Returned when one or more required fields are missing or invalid.

#### Example validation error response

```json
{
  "errors": [
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Server error
- Status: `500 Internal Server Error`
- Returned when there is an unexpected failure saving the user or generating the token.

## Users Login Endpoint

This document describes the `POST /users/login` endpoint used to authenticate an existing user and return a JWT token.

## Endpoint

- `POST /users/login`

## Description

Authenticates a user using email and password. If the credentials are valid, the endpoint returns an authentication token and basic user information.

## Required Request Body

The request body must be JSON and include the following fields:

- `email` (string): valid email address
- `password` (string): password with minimum length 6 characters

### Example JSON body

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## Success Response

- Status: `200 OK`
- Content type: `application/json`

### Example success response

```json
{
  "token": "<jwt_token_here>",
  "user": {
    "_id": "<user_id_here>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

## Error Responses

### Authentication error
- Status: `401 Unauthorized`
- Returned when the email or password is incorrect.

#### Example authentication error response

```json
{
  "message": "Invalid credentials"
}
```

### Validation error
- Status: `400 Bad Request`
- Returned when one or more required fields are missing or invalid.

#### Example validation error response

```json
{
  "errors": [
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Server error
- Status: `500 Internal Server Error`
- Returned when there is an unexpected failure during authentication.

## Users Profile Endpoint

This document describes the `GET /users/profile` endpoint used to fetch the authenticated user's profile data.

## Endpoint

- `GET /users/profile`

## Description

Returns the currently authenticated user's profile information. The request must include a valid JWT token in either the `Authorization` header as `Bearer <token>` or in a cookie named `token`.

## Success Response

- Status: `200 OK`
- Content type: `application/json`

### Example success response

```json
{
  "user": {
    "_id": "<user_id_here>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

## Error Responses

### Unauthorized
- Status: `401 Unauthorized`
- Returned when the request is missing a token or the token is invalid/expired.

#### Example unauthorized error response

```json
{
  "message": "Unauthorized"
}
```

### Server error
- Status: `500 Internal Server Error`
- Returned when there is an unexpected failure while retrieving the user profile.

## Users Logout Endpoint

This document describes the `GET /users/logout` endpoint used to log out an authenticated user and blacklist their current JWT token.

## Endpoint

- `GET /users/logout`

## Description

Logs out the current user by clearing the token cookie and saving the active JWT token in a blacklist. Blacklisting prevents the same token from being used again for protected routes even if it has not yet expired.

## Authentication

The request must include a valid JWT token in either the `Authorization` header as `Bearer <token>` or in a cookie named `token`.

## Success Response

- Status: `200 OK`
- Content type: `application/json`

### Example success response

```json
{
  "message": "Logged out successfully"
}
```

## Error Responses

### Unauthorized
- Status: `401 Unauthorized`
- Returned when the request is missing a token, the token is invalid, expired, or has already been blacklisted.

#### Example unauthorized error response

```json
{
  "message": "Unauthorized"
}
```

### Server error
- Status: `500 Internal Server Error`
- Returned when there is an unexpected failure while clearing the token or blacklisting it.

