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

## How to Use

1. Send a `POST` request to `/users/register`.
2. Include the JSON body with `fullname.firstname`, `fullname.lastname`, `email`, and `password`.
3. If valid, the endpoint returns a JWT token and the created user details.
4. If invalid, fix the request body and retry.
