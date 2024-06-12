# Memo Maestro App

## Overview

Memo Maestro is a note management application designed to help you efficiently create, delete, edit and search your notes. The application is divided into a frontend and backend, both of which are containerized using Docker for ease of deployment.

## Getting Started 🚀

### Prerequisites
- Docker

### Installation 🛠️

1. Clone the repository:
    ```bash
    git clone https://github.com/DevIgork/MemoMaster.git
    cd MemoMaster
    ```

2. Build and start the containers:
    ```bash
    docker-compose up --build -d
    ```

### Accessing the Application

- **Frontend**: [http://localhost:8081](http://localhost:8081)
- **Backend**: [http://localhost:8080/notes](http://localhost:8080/notes)

### Front End image

![Memo Maestro App](https://i.imgur.com/duY41cz.png)

## Technologies Used 🧰

### Frontend
- **React**: For building the user interface.
- **i18next**: For internationalization.
- **Axios**: For making HTTP requests.
- **React Icons**: For including icons in the application.
- **Sass**: For styling.
- **Cypress**: For end-to-end testing.

### Backend
- **Spring Boot**: For building the RESTful API.
- **PostgreSQL**: For the database.
- **MapStruct**: For mapping between different object models.
- **Liquibase**: For database migrations.
- **Lombok**: To reduce boilerplate code.
- **JUnit**: For testing the backend.

## Project Structure 📂

- **Frontend**: Located in the `frontend` directory.
- **Backend**: Located in the `backend` directory.

## Future Plans 🌟
- Implement authentication and authorization.
- Cover the backend with tests.
- Add multiple boards for data storage.
- Improve frontend design.

## Contributing 🤝

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

fell free to change .env file

Happy coding! 😊
