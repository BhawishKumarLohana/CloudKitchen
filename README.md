

#  Food Delivery Application (Microservices Architecture)

A **Food Delivery Application** built to explore and understand **microservices architecture**, service discovery, and containerized deployments.

This project focuses on **service isolation, scalability, and resilience** by dividing the system into independently deployable services that communicate through service discovery rather than hard‑coded endpoints.

***

## Architecture Overview

The application is designed using a **microservices‑based architecture**, composed of **four independent services**:

### Restaurant Listing Service

*   Manages restaurants and their basic information
*   Acts as the entry point for browsing available restaurants

### Food Catalogue Service

*   Handles menu items and food details for each restaurant
*   Responsible for food availability and pricing

### Order Service

*   Manages the order lifecycle
*   Handles order creation and order persistence

###  User Service

*   Manages user accounts and user‑related operations
*   Provides user identification for order placement

Each service runs as a **standalone application** and can be deployed, scaled, and updated **independently**.

This approach increases:

*   Flexibility
*   Scalability
*   Fault tolerance
*   Cloud readiness

Each microservice is containerized using **Docker**:

## What I Learned

Through building this project, I gained hands‑on experience with:

*    Designing and implementing **microservices architecture**
*    **Service discovery** using Netflix Eureka
*    **Docker & DockerHub** for containerization and image management
*    Differences between **SQL and NoSQL databases**
*    Implementing **CRUD operations using JPA**
*    Building resilient systems with minimal service coupling
*    Managing communication between distributed services

***

