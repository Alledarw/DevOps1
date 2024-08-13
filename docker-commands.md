### NOTE: MAKE SURE TO SETUP THE MONGODB CONTAINER AND THE USERS WITH RIGHT PERMISSION, OTHERWISE AUTH WILL FAIL WHEN CONNECTING THE SERVICES ###
### If you want to pull the images related to this project instead of building them visit: https://hub.docker.com/repositories/alledarw  (use v1 on all) ###

### Start the containers within the same network. Make sure the network is created before (docker network ls)
docker run -p 80:80 -d --network my-network --name todo-frontend todo-frontend
docker run -d -p 4001:4001 --network my-network --name user-service user-service
docker run -d --network my-network -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongo mongo:latest

### Make sure that you login to the mongosh in the mongo container running with auth. Otherwise you will not be able to add new users or do admin stuff.
use usersdb

db.createUser({
  user: "admin",
  pwd: "password",
  roles: [{ role: "readWrite", db: "usersdb" }, { role: "readWrite", db: "todosdb" }]
})

use todosdb

db.createUser({
  user: "admin",
  pwd: "password",
  roles: [{ role: "readWrite", db: "usersdb" }, { role: "readWrite", db: "todosdb" }]
})