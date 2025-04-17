# Bus Ticket Booking App

## 1. Overview
The **Bus Ticket Booking App** is a microservices-based web application that allows users to search, book, and manage bus tickets. It uses a scalable architecture with core services for user management, booking, bus data, and an API gateway for routing requests. The app leverages Redis for caching, long polling for real-time updates, and integrates the Razorpay payment gateway for secure transactions.

## Features
- **User Authentication**: Secure login and signup with JWT-based authentication.
- **Bus Search**: Users can search for buses by source, destination, and travel date.
- **Booking**: Real-time seat availability and booking.
- **Payment Gateway**: Integrated **Razorpay** for secure payments and instant booking confirmation.
- **Real-time Updates**: Long polling to keep users updated on seat availability during the booking process.
- **Caching**: Redis caching to improve search performance and reduce load on the database.
- **Scalability**: Microservices architecture ensures ease of scaling and maintenance.

## Architecture
The application follows a **microservices architecture** with the following services:

1. **User Service**: Handles user registration, login, and authentication.
2. **Booking Service**: Manages ticket bookings, booking history, and available seats.
3. **Bus Service**: Maintains bus schedules, routes, and seat availability.
4. **API Gateway**: Routes incoming requests to the appropriate services and handles load balancing and security.

### Technologies Used
- **Frontend**: React.js (Web) / React Native (Mobile)
- **Backend**: Node.js, Express.js
- **Microservices**: Node.js-based services for User, Booking, Bus, and API Gateway
- **Database**: PostgreSQL with Prisma ORM for data management
- **Caching**: Redis for real-time updates and caching search results
- **Authentication**: JWT for stateless authentication and bcrypt for password hashing
- **Payment**: Razorpay API for secure payments
- **Real-time Communication**: Long polling for real-time booking updates
- **Security**: JWT authentication, HTTPS, and bcrypt for password hashing


### 2. **User Authentication and Security**
- **JWT Authentication**: Users log in with their credentials, and upon successful authentication, a **JWT token** is issued. This token is used for subsequent requests to validate the user’s identity, ensuring that only authorized users can access sensitive routes.
- **bcrypt for Password Hashing**: When users create an account or change their password, the password is hashed using **bcrypt** before it is stored in the database. This provides a secure way to store passwords.
- **HTTPS**: The application uses **HTTPS** for secure communication between the client and server, ensuring that all data, including sensitive user information and payment details, is encrypted during transmission.

### 3. **Real-Time Updates with Long Polling**
- **Long Polling** is used to provide users with real-time updates on bus seat availability and booking status. Instead of constantly polling the server for updates, the client sends a request, and the server holds the connection open until new data is available (like a seat being booked). Once the update is ready, the server sends a response, and the client updates the UI accordingly.
- This mechanism allows for seamless, real-time interaction with the app without needing the user to refresh the page or manually check for updates.

### 4. **Redis for Caching**
**Redis** is used to store frequently accessed data, such as bus schedules or search queries, in-memory. This greatly improves performance by reducing the need to query the database for commonly requested data. For example:
- When a user searches for buses, Redis caches the results of that query, so subsequent searches for the same route are served directly from Redis, providing faster response times.
- **Caching** also helps with load balancing, reducing the strain on the backend and ensuring that the system can handle a high volume of requests efficiently.

### 5. **Debouncing for Search Optimization**
To improve the user experience and avoid unnecessary API calls during bus searches, **debouncing** is implemented. Debouncing delays the execution of the search request until the user has finished typing. This prevents the app from making a new request for every keystroke and reduces unnecessary load on the server.
- For example, if a user is searching for a bus from "Delhi" to "Mumbai," the app will wait for the user to stop typing (say after 500ms) before sending the actual request to the server. This ensures that only relevant, completed searches are processed.

### 6. **Payment Gateway Integration**
The application integrates with **Razorpay** for handling payments securely. Razorpay is a widely used payment gateway in India that enables users to pay for their bus tickets directly through the app.
- After a user selects a bus and confirms their booking, they can proceed to the payment gateway to make the payment. Once the payment is completed successfully, the booking is confirmed and the user is notified in real-time.
- Razorpay ensures that sensitive financial information is handled securely, with encryption and other security measures in place.

### 7. **Scalability and Maintainability**
The app is designed to be **scalable** through its microservices architecture. Each service can be scaled independently based on demand, which allows the app to handle a large number of users and requests. For example, if the booking service receives a high volume of traffic during peak times, it can be scaled up without affecting other services like the user or bus services.
- Additionally, the modular nature of the microservices ensures that each part of the system is maintainable and can be updated or modified without causing downtime for the entire app.


## Installation

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL
- Redis
- Razorpay account (for payment gateway integration)

### Steps to Set Up

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/bus-ticket-booking-app.git
   cd bus-ticket-booking-app
