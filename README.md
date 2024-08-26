# School Management API

This repository contains a Node.js project that implements a School Management API using Express.js and MySQL. The system allows users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Postman Collection](#postman-collection)
- [License](#license)

## Features
- Add new schools to the database.
- Retrieve a list of schools sorted by proximity to a given location.

## Installation

### 1. Clone the Repository
First, clone this repository to your local machine:

```bash
git clone https://github.com/Rakhshan90/educase-backend.git
```
### 2. Navigate to the Project Directory
Change into the project directory:

```bash
cd educase-backend
```

### 3. Install Dependencies
Install the required dependencies using npm:

```bash
npm install
```

## Usage

### 1. Start the Server
You can choose any of three commands to start the server locally:

```bash
node index.js

npm run start

npm run server
```

### 2. Access the API
Once the server is running, you can access the API at http://localhost:3000 (or the port specified in your project).

## API Endpoints

### Add School

- Endpoint: /api/addSchool
- Method: POST
- Description: Adds a new school to the database.
- Body: {
    "name" : "school six",
    "address" : "school six addres",
    "latitude" : 12.23,
    "longitude" : 13.67 }

### List Schools

- Endpoint: /api/listSchools
- Method: GET
- Description: Retrieves a list of schools sorted by proximity to the specified location.
- Body: {
    "latitude" : 42.23,
    "longitude" : 29.67 }


## Postman Collection

- A Postman collection for testing the APIs is provided. 
- You can import it into Postman and use it to test the various API endpoints.

## License

This project is licensed under the ISC License

