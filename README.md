# zcrud-app

Clone this repository

Front End
In frontend folder -> npm install

In frontend folder -> npm install @mui/material @mui/icons-material @emotion/react @emotion/styled

Docker
Create a docker image and container:
docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres

Create a Database In Docker named -> inventory

Backend
In server folder -> npm install

In server folder -> npm i express pg knex

In server folder package.json -> add "start": "nodemon ./src/app.js" to dependencies.

In server folder -> Run Migrations and Seeds

a. Migrations: User is ran before item

b. Seeds: User is ran before item

Npm Start in /server directory

Npm Start in /frontend directory
