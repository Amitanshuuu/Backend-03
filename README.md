# Backend-03

A simple Express.js backend server that provides a sum API endpoint.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   node index.js
   ```

The server will run at [http://localhost:3000](http://localhost:3000).

## API Endpoints

### `GET /sum`
Calculate the sum of two numbers.

**Query Parameters:**
- `a` (number, required): The first number.
- `b` (number, required): The second number.

**Example Request:**
```
GET http://localhost:3000/sum?a=5&b=7
```

**Example Response:**
```json
{
  "result": 12
}
```

## Notes
- CORS is enabled for all origins.
- Make sure Node.js is installed on your system. 

## Project Structure

- `/backend` - Express.js backend (API endpoints, business logic)
- `/frontend` - Frontend (UI, static files)

