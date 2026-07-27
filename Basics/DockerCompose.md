# Docker Compose in very simple words
Docker Compose is a tool that helps you run multiple Docker containers together using one configuration file.

* Imagine your application has:

🟢 Frontend → React
🔵 Backend → Node.js/Express
🟡 Database → MongoDB

Without Docker Compose, you have to run each container separately.

With Docker Compose, you define all services in one file:
services:
  backend:
    image: node-app

  database:
    image: mongo

Then run everything with:
// docker compose up

* Real-life example

Think of Docker Compose like a remote control 🎮.

Instead of starting:

Frontend container → Start
Backend container → Start
MongoDB container → Start

one by one, you press one button:

// docker compose up

and all containers start together.

* to stop all the containors use 
// docker compose down


* to  run the containers in the background 
// docker compose up -d