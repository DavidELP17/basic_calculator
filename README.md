# Basic calculator

# Api Documentation

Basic calculator backend application that performs the basic arithmetic operations such as sum, subtraction, multiplication and division.

## Tools

The following tools where used in the implementation of the continuous integration pipeline:

- Built in NodeJS using JavaScript.
- Git.
- Jest.
- Docker.
- Jenkins.
- SonarQube.

All the previous tools ran in local machine using the Port 3000 for the Application, default Port 9000 for SonarQube and Port 8080 for Jenkins.

### Plugins used in Jenkins:

- Git/GitHub plugin
- Docker plugin
- NodeJS plugin

## Commands to run the application

- Running the program in local machine

    ```jsx
    npm start
    ```

- Running the docker image

    ```jsx
    docker run -d -p 3000:3000 calculator
    ```

## HTTP Methods involved

```jsx
GET /api/sum?n1=#&n2=#
```

```jsx
GET /api/sub?n1=#&n2=#
```

```jsx
GET /api/mul?n1=#&n2=#
```

```jsx
GET /api/div?n1=#&n2=#
```

Note: The # symbol represents a number which will be used to perform the operation.

Note: The division by zero operation throws zero as a result.
