# How to Implement Password Reset via Email in Node.js

This repository contains the source code for a tutorial on how to implement password reset via email in Node.js.

## Overview of Rest APIs

| Methods | Urls                           | Actions                                                   |
| ------- | ------------------------------ | --------------------------------------------------------- |
| POST    | /users                         | Create a new user                                         |
| GET     | /users                         | Retrieve all users                                        |
| POST    | /password-reset                | Send a password reset link to a user's email              |
| POST    | /password-reset/:userId/:token | Reset a user's password using a token sent to their email |

## Getting Started

To get started with this project, you can either clone the repository or download the source code as a zip file.

```bash
git clone https://github.com/sawnaytharpoe02/OJT_NodeJS/tree/master/assignment10
```

## Installation

Once you have the source code on your machine, you can install the project dependencies by running the following command in the project directory:

```bash
npm install
```

## Usage

This is a setup file for a password reset feature. Here are the variables that can be customized based on the user's needs:

- `PORT`: This variable sets the port on which the application will run. The default value is `8080`, but you can change it to any available port number that you want.

- `DB`: This variable sets the database connection string for the MongoDB database. The default value is `"mongodb://127.0.0.1:27017/password-reset"`, but you can replace it with your own MongoDB connection string.

- `HOST`: This variable sets the host name for the SMTP server that will be used to send password reset emails. The default value is `"smtp.ethereal.email"`, but you can replace it with your own SMTP server.

- `USER`: This variable sets the email address that will be used to send password reset emails. The default value is `"naytharpoe27@gmail.com"`, but you should replace it with your own email address.

- `PASS`: This variable sets the password for the email account that will be used to send password reset emails. The default value is `"rgewzroxcabmfznr"`, but you should replace it with your own email password.

- `SERVICE`: This variable sets the email service provider that will be used to send password reset emails. The default value is `"gmail"`, but you can replace it with your own email service provider.

- `BASE_URL`: This variable sets the base URL for the password reset API endpoint. The default value is `"http://localhost:8080/api"`, but you can replace it with your own API endpoint.

Sample of my customizable `.env` file

```bash
PORT=8080
DB="mongodb://127.0.0.1:27017/password-reset"
HOST="smtp.ethereal.email"
USER="naytharpoe27@gmail.com"
PASS="rgewzroxcabmfznr"
SERVICE="gmail"
BASE_URL="http://localhost:8080/api"
```

Once you have set up the environment variables, you can start the project by running the following command:

```bash
yarn serve
```

This will start the server on port 8080. You can access the server by navigating to `http://localhost:8080` in your web browser.

Sure, here are some examples of how to use these routes in Postman:

## Example Of How You Can Modify And Test

## Create a new user

### Request

**POST** `http://localhost:3000/users`

Request body:

```json
{
	"name": "John Doe",
	"email": "johndoe@example.com",
	"password": "123456"
}
```

### Response

```json
{
	"success": true,
	"message": "User created successfully",
	"data": {
		"name": "John Doe",
		"email": "johndoe@example.com",
		"password": "123456",
		"createdAt": "2023-04-25T08:04:22.966Z",
		"_id": "64478a79de20322c2108cd3e",
		"__v": 0
	}
}
```

## Retrieve all users

### Request

**GET** `http://localhost:3000/users`

### Response

```json
{
	 "success": true,
    "message": "Get All Users Successfully",
    "data": [
        {
            "_id": "64478cf7ecddb2d0d83776c9",
            "name": "John Doe",
            "email": "johndoe@example.com",
            "password": "123456",
            "createdAt": "2023-04-25T08:18:28.179Z",
            "__v": 0
        },
        {
            "_id": "64478d70ecddb2d0d83776ce",
            "name": "Marry Brown",
            "email": "marrybrown@example.com",
            "password": "123456",
            "createdAt": "2023-04-25T08:18:28.179Z",
            "__v": 0
        },
        ....
    ]
}
```

## Send a password reset link

### Request

**POST** `http://localhost:3000/password-reset`

Request body:

```json
{
	"email": "johndoe@example.com"
}
```

### Response

```json
{
	"success": true,
	"userId_token": "64478cf7ecddb2d0d83776c9/1a2b884ad68f353ee9fdcbccc790e42b4d5f727ae8130817261692f96d92ba74",
	"message": "Password reset link sent to your email account successfully"
}
```

## Reset a user's password using a token sent to their email

### Request

**POST** `http://localhost:3000/password-reset/64478cf7ecddb2d0d83776c9/1a2b884ad68f353ee9fdcbccc790e42b4d5f727ae8130817261692f96d92ba74`

Request body:

```json
{
	"password": "newpassword"
}
```

### Response

```json
{
	"success": true,
	"message": "Password reset successfully"
}
```

Note: These are just examples, so the exact response data may vary depending on the implementation of the API.

## Contributing

If you find any issues with this project or have suggestions for how it can be improved, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
