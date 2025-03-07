# EasyCar

### 📌 Overview

EasyCar is a mobile application that facilitates ride-sharing between drivers and passengers. Passengers can search for rides, and drivers can accept or decline ride requests. The application includes essential functionalities such as ride cancellation and completion.

### 🚀 Technologies Used

### Frontend

React Native (Expo)

### Backend

Node.js (RESTful API with Express)

### Database

SQLite

## ⚙️ Features

Passenger:
- Search for available rides.
- Cancel a ride request before acceptance.
- Mark a ride as completed after reaching the destination.

Driver:
- Accept or decline ride requests.

## 🔧 Installation

Prerequisites

- Node.js
- React Native Expo
- SQLite

### 🛠 Backend Setup

Clone the repository:

```
git clone https://github.com/yourusername/easycar.git
```

Navigate to the backend folder:
```
cd easycar/servidor-api
```
Install dependencies:
```
npm install
```
Start the server:
```
node src/index.js
```
The API will run on http://localhost:3003.

### 🛠 Frontend Setup

Navigate to the frontend folder:
```
cd easycar/easycar-front
```
Install dependencies:
```
npm install
```
Run the app:
```
npx expo start
```


<br>

🌍 API Endpoints

| Method | Endpoint                         | Description               |
| ------ | -------------------------------- | ------------------------- |
| GET    | `/rides`                         | List all rides            |
| GET    | `/rides/:ride_id`                | Get ride details          |
| POST   | `/rides`                         | Create a new ride request |
| DELETE | `/rides/:ride_id`                | Cancel a ride request     |
| PUT    | `/rides/:ride_id/finish`         | Mark ride as completed    |
| GET    | `/rides/drivers/:driver_user_id` | List rides for a driver   |
| PUT    | `/rides/:ride_id/accept`         | Driver accepts a ride     |
| PUT    | `/rides/:ride_id/cancel`         | Passenger cancels a ride  |

<br>
🤝 Contribution

Feel free to contribute to this project by submitting issues and pull requests.


