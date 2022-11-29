# todo-app
List of todo application
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequests

MySQL, NODE

CREATE DATABASE `todo_db`

-- todo_db.Users definition

CREATE TABLE `Todos` (
  `TodoId` int NOT NULL AUTO_INCREMENT,
  `Status` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `UserId` int DEFAULT NULL,
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL,
  PRIMARY KEY (`TodoId`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `todos_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `Users` (`UserId`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Users` (
  `UserId` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

In the project directory, you can run:

cd server
### `npm i`
### `npm start`

Runs the app in the development mode.
Open [http://localhost:4000]

cd client
### `npm i`
### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000]

