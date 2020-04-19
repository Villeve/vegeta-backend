# Gigs application
Dockerized application with with Vue frontend, Node backend, Nginx reverse proxy/load balancer and postgres database. The frontend is uploaded to DockerHub https://hub.docker.com/repository/docker/villeve/vegeta_frontend and also made available on GitHub https://github.com/Villeve/vegeta-frontend

## How to run
```
docker-compose up
```

Or with load balancing

```
docker-compose up --scale backend=3
```

And navigate to localhost:5000





## Some random notes below -- You can ignore these
### Postgres commands
psql

show databases: \l

\c dbname

show tables: \dt

CREATE TABLE gigs(id serial, title character(200), technologies character(200), description character(200), budget character(30), "contactEmail" character(200), "createdAt" date, "updatedAt" date, PRIMARY KEY(id));

CREATE TABLE gigs(id serial, title varchar(200), technologies varchar(200), description varchar(200), budget varchar(30), "contactEmail" varchar(200), "createdAt" date, "updatedAt" date, PRIMARY KEY(id));

### Nginx scaling
docker-compose up --scale backend=3
