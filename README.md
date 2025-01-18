# Air Ticket Booking Service

This repository contains the backend code for the Air Ticket Booking Service, designed to streamline the process of booking flight tickets with efficient microservices and scalable APIs. It leverages modern technologies to ensure reliability, performance, and security.

# Features

- API Gateway: Manages incoming requests and routes them to the appropriate services using Node.js and Express.js.

- Microservices Communication: Implemented using RabbitMQ, ensuring seamless and efficient interaction between services.

- Secure APIs: RESTful APIs with secure authentication for user data and transactions.

- Database Integration: Utilizes MySQL for structured data storage and management.

- Scalable Hosting: Deployed on AWS EC2 instances for high availability and scalability.

- Concurrent Handling: Supports up to 500+ concurrent requests with optimized query handling.

# Tech Stack

- Programming Languages: JavaScript (Node.js)

- Frameworks: Express.js

- Message Broker: RabbitMQ

- Database: MySQL

- Cloud Platform: AWS (EC2)

- Version Control: Git, GitHub

# Setup Instructions

- Clone the Repository:

`git clone https://github.com/sameergupta914/AirTicketBooking_service.git`

`cd AirTicketBooking_service/API_Gateway`

- Install Dependencies:

`sudo npm install`

- Start the Application:

`sudo npx pm2 start index.js`

- Configure RabbitMQ (Ensure RabbitMQ is installed and running):

- Update the RabbitMQ connection settings in the `.env `file.

# Set Up Database:

- Create a MySQL database.

- Import the database schema provided in the `/schema` directory.

- Update the database credentials in the `.env` file.

# Endpoints

- GET /flights: Retrieve available flights.

- POST /book: Book a flight ticket.

- GET /booking/:id: Retrieve booking details by ID.

# Future Enhancements

- Add Payment Gateway Integration: To handle user payments securely.

- Implement Caching: Use Redis for faster data retrieval.

- Expand to Multitenancy: Support multiple airlines on a single platform.

# Contributors

Sameer GuptaGitHub | LinkedIn

# License

This project is licensed under the MIT License. See the LICENSE file for details.

# Contact

For any questions or suggestions, feel free to reach out to sameerguptaa09@gmail.com.
