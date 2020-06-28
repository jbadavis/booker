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

Initialise the `.env` file using the values used above.

```sh
cp .env.example .env
```

### Server

```sh
npm i

npm start
```

## Example Requests

Example cURL requests can be found below.

### Add User 

```sh
curl -d '{"email": "foo@bar.com"}' \
    -H "Content-Type: application/json" \
    -X POST http://localhost:3000/users
```

### Get Users

```sh
curl http://localhost:3000/users
```

### Create Booking

```sh
curl -d '{"userId": "1", "dateTime": "2020-01-01 12:00:00"}' \
    -H "Content-Type: application/json" \
    -X POST http://localhost:3000/bookings
```

### Get Bookings

```sh
curl http://localhost:3000/bookings
```
### Delete Booking

```sh
curl -X DELETE http://localhost:3000/bookings/{booking_id}
```

