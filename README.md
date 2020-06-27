# Booker

An example Node/PostgreSQL application.

## Getting Started

### Postgres 

```sh
 docker run --name some-postgres \
     -e POSTGRES_USER=mild \
     -e POSTGRES_PASSWORD=bitter \
     -e POSTGRES_DB=ipa # Will default to POSTGRES_USER \
     -p 5432:5432 \
     -d postgres
```

### Server

```sh
npm i

npm start
```

## Curl

Example requests can be found below.

### Add User 

```sh
curl -d '{"email":"foo@bar.com"}' \
    -H "Content-Type: application/json" \
    -X POST http://localhost:3000/users
```
