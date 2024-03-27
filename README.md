# Token Management API

This project implements a RESTful JSON API for managing digital assets known as "tokens" within the cryptocurrency industry. It allows for the creation and retrieval of token records in a PostgreSQL database.

## Technologies Used
- Backend Language: TypeScript
- Server Framework: Node.js with Express.js
- Database: PostgreSQL
- ORM: Typeorm
- Test: Jest

## Setup with manual
1. Clone the repository. https://github.com/crackdev01/BCAS_TEST.git
2. Move directory using cd ./BCAS_TEST.
3. Install dependencies using `npm install`.
4. Set up a PostgreSQL database.
  - Run PostgreSQL DB Server
  - Create BCAS_test
5. Update the database connection details in the .env file.
  ```
  DB_HOST={localhost} PostgreSQL server host 
  DB_PORT={5432} PostgreSQL server port
  DB_USERNAME={postgres} PostgreSQL credential user
  DB_PASSWORD={12345678} PostgreSQL server password
  DB_NAME=BCAS_test
  ```
6. Start the server using `npm start`.
7. Test the server using `npm test`.

## Setup with docker
1. Clone the repository. https://github.com/crackdev01/BCAS_TEST.git
2. Move directory using `cd ./BCAS_TEST`.
3. Run docker using `docker-compose up`.



## API Endpoints
### Local Root api: http://localhost:8000/api/v1
### Deployed Root api: http://ec2-44-206-191-161.compute-1.amazonaws.com:8000/api/v1
#### POST /tokens

Creates a new token record in the database.

```
Request Body
{
  "name": "Token Name",
  "ticker": "TKN",
  "description": "Token Description"
}
```
```
Response
{
  "id": 1,
  "name": "Token Name",
  "ticker": "TKN",
  "description": "Token Description"
}
```
#### GET /tokens/:id

Retrieves a token record by its id.
```
Response
{
  "id": 1,
  "name": "Token Name",
  "ticker": "TKN",
  "description": "Token Description"
}
```

#### About Tokens in the Crypto Industry
In the cryptocurrency industry, a token represents a unit of value issued by a project or company and is built on top of an existing blockchain infrastructure, such as Ethereum. Tokens can serve various purposes including representing assets, facilitating transactions within a project's ecosystem, or granting holders certain rights or privileges. They are an integral part of decentralized applications (dApps) and decentralized finance (DeFi) operations.
