# Inventory Management Project
## Introduction

This project is an inventory management system that uses Docker for containerization and includes commands for building, running, and managing the application.


## Prerequisites

Before you begin, ensure you have met the following requirements:
- Add to /etc/hosts: 127.0.0.1   mongo
- You have installed Node.js and npm.
- You have installed Docker and Docker Compose.


## Commands

### `init`
Runs the `install` and `run` commands in sequence. This is useful for setting up the project and starting it quickly.

### `install`
Installs the project's dependencies using npm.

### `format`
Formats the code according to the project's predefined formatting rules.

### `build`
Builds the project.

### `clean`
Removes the `dist` directory, which contains the built project files. This is useful for cleaning up the project and removing old build files.

### `run`
Starts the project.

### `stop`
Stop all containers.

1. **Initialize the project:**
   ```sh
   make init


# Example requests

curl --location 'http://localhost:3001/api/v1/products/' --header 'Content-Type: application/x-www-form-urlencoded' --data-urlencode 'name=testowy product 2' --data-urlencode 'description=abc' --data-urlencode 'price=104' --data-urlencode 'stock=20'

curl --location --request PATCH 'http://localhost:3001/api/v1/products/669bcbaccbe46c6cc935ec8d/restock' --header 'Content-Type: application/x-www-form-urlencoded' --data-urlencode 'quantity=6'

curl --location --request PATCH 'http://localhost:3001/api/v1/products/669bcbaccbe46c6cc935ec8d/sell' --header 'Content-Type: application/x-www-form-urlencoded' --data-urlencode 'quantity=3'

curl --location --request GET 'http://localhost:3001/api/v1/products/' --header 'Content-Type: application/x-www-form-urlencoded' 

curl --location 'http://localhost:3001/api/v1/orders' --header 'Content-Type: application/x-www-form-urlencoded' --data-urlencode 'customerId=669b80a9f33fb6ad2deab8cc' --data-urlencode 'products=[{"productId":"669bcbaccbe46c6cc935ec8d","quantity":2}]'