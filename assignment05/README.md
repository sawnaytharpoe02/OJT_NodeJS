# RESTful Sample Moive APIs

This is a small movie project API built using Node.js, Express.js and MongoDB. It supports CRUD operations (Create, Read, Update and Delete) for movie entities.

## Getting Started

### Prerequisites

- Node.js installed on your local machine
- MongoDB instance running on your local or remote machine

### Installing

1. Clone the repository:
   ```
   git clone https://github.com/your-username/movie-api.git movie-api
   ```
2. Navigate to the project directory:
   ```
   cd movie-api
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create `.env` file in root folder and add the following environment variables:
   ```
   PORT=4000
   MONGODB_URI=mongodb://localhost:27017/movie
   ```
   Replace `mongodb://localhost:27017/movie` with your MongoDB connection string and database name.
5. Start the server:
   ```
   yarn serve
   ```

## Endpoints

### GET /movies

Get a list of all movies.

#### Request

```
GET /movies
```

#### Response

```
Status: 200 OK
Content-Type: application/json

[
    {
        "_id": "644615772174f0a0039704db",
        "name": "Fight Club",
        "year": "1999",
        "rating": 8.1,
        "createdAt": "2023-04-24T05:36:55.047Z",
        "updatedAt": "2023-04-24T05:36:55.047Z",
        "__v": 0
    },
    {
        "_id": "644615de2174f0a0039704e0",
        "name": "The Dark Knight",
        "year": "2008",
        "rating": 9,
        "createdAt": "2023-04-24T05:38:38.506Z",
        "updatedAt": "2023-04-24T05:38:38.506Z",
        "__v": 0
    },
    ...
]
```

### GET /movies/:id

Get a specific movie by its ID.

#### Request

```
GET /movies/644615772174f0a0039704db
```

#### Response

```
Status: 200 OK
Content-Type: application/json

{
    "_id": "644615772174f0a0039704db",
    "name": "Fight Club",
    "year": "1999",
    "rating": 8.1,
    "createdAt": "2023-04-24T05:36:55.047Z",
    "updatedAt": "2023-04-24T05:36:55.047Z",
    "__v": 0
}
```

### POST /movies

Create a new movie.

#### Request

```
POST /movies
Content-Type: application/json

{
  "name": "The Dark Knight",
  "year": "2008"
  "rating": 8.9,
}
```

#### Response

```
Status: 201 Created
Content-Type: application/json

{
    "name": "The Dark Knight",
    "year": "2008",
    "rating": 8.9,
    "_id": "644615f82174f0a0039704e3",
    "createdAt": "2023-04-24T05:39:04.489Z",
    "updatedAt": "2023-04-24T05:39:04.489Z",
    "__v": 0
}
```

### PUT /movies/:id

Update a specific movie by its ID.

#### Request

```
POST /movies/644615bd2174f0a0039704dd
Content-Type: application/json

{
    "name": "the kingdom",
    "year": "2020",
    "rating": 9
}
```

#### Response

```
Status: 200 OK
Content-Type: application/json

{
    "_id": "644615bd2174f0a0039704dd",
    "name": "the kingdom",
    "year": "2020",
    "rating": 9,
    "createdAt": "2023-04-24T05:38:05.347Z",
    "updatedAt": "2023-04-24T06:12:31.290Z",
    "__v": 0
}
```

### DELETE /movies/:id

Delete a specific movie by its ID.

#### Request

```
DELETE /movies/644615bd2174f0a0039704dd
Content-Type: application/json

```

#### Response

```
Status: 200 OK
Content-Type: application/json

{
    "con": true,
    "msg": "Movie id 644615bd2174f0a0039704dd deleted ",
    "result": []
}
```

## Error Handling

In case of errors, the API will return a JSON object with a message property.

#### Example Error Response

```
Status: 500 Internal Server Error
Content-Type: application/json

{
    "con": false,
    "msg": "There is no moive id that you searching for!"
}
```
