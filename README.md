[![Node.js Version](https://img.shields.io/badge/Node.js-v18-green.svg)](https://nodejs.org/)
[![MySQL Version](https://img.shields.io/badge/MySQL-v8.2-blue.svg)](https://www.mysql.com/)
[![Nginx Version](https://img.shields.io/badge/Nginx-v1.21%20Alpine-brightgreen.svg)](https://nginx.org/)



# Node.js with MySQL and Nginx Application - FullCycle Challenge

---

## Application Overview

This repository features a simple application running on a reverse proxy with Nginx, utilizing Node.js with the Express framework, and a MySQL database. The application, accessible through port 8080, performs the following actions upon each visit: registers fictitious names into database, displays the message "Full Cycle Rocks!", and lists all registered individuals.

## Components

- **Reverse Proxy:** Nginx is employed as a reverse proxy to manage incoming requests and forward them to the appropriate Express backend service.

- **Express Backend:** Node.js, along with the Express framework, serves as the backend for the application. It handles incoming requests, registers fictitious names in the MySQL database, and responds with the "Full Cycle Rocks!" message and a list of all registered individuals.

- **Database:** MySQL is used as the database to persistently store information about the fictitious names entered via the application.


### Run app locally

Makefile:
```
# To Build project
make build

# To run project
make up


# To stop project
make down

```
or 

Copy Node environment variables
```
cp contrib/node-env-sample ./node/.env
```


Docker compose CLI:
```
docker compose up -d --build
```

Access the Web Browser on address:
```
http://localhost:8080
``` 