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

### Important note!

All the previous tools ran in local machine using the Port 3000 for the Application, default Port 9000 for SonarQube and default Port 8080 for Jenkins.
In the project I stated these IP Address as localhost and Local IP Adresses to access these applications

### Plugins used in Jenkins:

- Git/GitHub plugin
- Docker plugin
- NodeJS plugin

## Commands to run the application

- Running the program in local machine

    ```jsx
    npm start
    ```

Running using Docker

- Building the docker image inside project directory

    ```jsx
    docker build -t calculator .
    ```

- Running the docker image

    ```jsx
    docker run -d -p 3000:3000 calculator
    ```

- Docker Images repositoy
    [DockerHub Project Repository](https://hub.docker.com/r/davidelp17/calculator)

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

## Jenkins Pipeline stages
![image](https://user-images.githubusercontent.com/17619940/126083843-038f2684-28ab-40c6-8cca-7ea3c50a1599.png)

