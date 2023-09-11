# zcrud-app

1. In frontend folder -> npx create-react-app my-app
2. In server folder -> npm install -g nodemon
3. In server folder -> nm init-y
4. In server folder -> npm i express pg knex
5. In server folder -> npm install -g nodemon
6. In server folder package.json -> add "start": "nodemon ./src/app.js" to dependencies.
7. Create a docker image and container: docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \
   -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
