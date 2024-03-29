# Getting Started with Real-Time Stock Dashboard

The goal of this project is to create a real-time stock market dashboard that displays stock prices and updates them periodically. This application will have a Node.js backend and a React.js frontend, with data management handled through SQL.

## Prerequisites

- **Node.js**: This project requires Node.js version 18.0.0. You can download it from the [Node.js official website](https://nodejs.org/).

## Setup

1. **Clone the Repository**:

- Clone the repository to your local machine using the following command:
`git clone https://github.com/waqashussain2194/stock-server-app.git`

2. **Install Dependencies**:

- Navigate to the project directory and install the necessary dependencies:
`npm install`

3. **Environment Variables**:

- Create a `.env` file at the root level of the project. For the required contents of the `.env` file, refer to the `.env.example` file located in the project's root directory. (Content of .env file will also be available on demand)

4. **Database**:

- In this project we're using PostgreSQL database. Before running the projcet. Please create a database in Postgres with name:
`stocks`

## Running the Project

To start the application in development mode, run the following command:
### `nodemon server.js`
or if you dont have nodemon then run
### `node server.js` 

This will run the app in development mode. You can open [http://localhost:5000](http://localhost:5000) to view it in your browser for basic route.

## Sample ScreenShots of the end points

<img width="1250" alt="Screenshot 2024-01-21 at 1 40 03 AM" src="https://github.com/waqashussain2194/todos-app/assets/109997361/9b0fdac7-47b7-4744-a6f7-4b4168ed723b">

<img width="1250" alt="Screenshot 2024-01-21 at 1 40 23 AM" src="https://github.com/waqashussain2194/todos-app/assets/109997361/1e889552-d7ec-4b3f-94ff-0786910d9b11">

<img width="1252" alt="Screenshot 2024-01-21 at 1 41 15 AM" src="https://github.com/waqashussain2194/todos-app/assets/109997361/9bd091bf-7294-417a-a9ac-d00da88b2d32">

