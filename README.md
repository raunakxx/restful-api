RESTful API Documentation
Overview

This RESTful API allows clients to perform CRUD (Create, Read, Update, Delete) operations on user resources. It provides endpoints for managing user data, following REST principles and utilizing HTTP methods for interaction.
Endpoints
Add a New User

    URL: /api/users
    Method: POST
    Description: Adds a new user to the system.
    Request Body: JSON object containing user data (e.g., {"name": "John", "email": "john@example.com"}).
    Response: JSON object containing status and details of the newly added user.

Retrieve User Details

    URL: /api/users/:id
    Method: GET
    Description: Retrieves details of a specific user by their ID.
    Parameters: id - The ID of the user to retrieve.
    Response: JSON object containing details of the requested user.

Update User Information

    URL: /api/users/:id
    Method: PATCH
    Description: Updates information for a specific user.
    Parameters: id - The ID of the user to update.
    Request Body: JSON object containing updated user data.
    Response: JSON object containing status and details of the updated user.

Delete a User

    URL: /api/users/:id
    Method: DELETE
    Description: Deletes a specific user from the system.
    Parameters: id - The ID of the user to delete.
    Response: JSON object containing status indicating the success of the operation.

Usage

    Install dependencies: npm install
    Start the server: npm start
    Access the API endpoints using appropriate HTTP requests.

Technologies Used

    Node.js
    Express.js
    JSON
