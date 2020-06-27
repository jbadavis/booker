# Booker

An example Node/PostgreSQL application.

## Initialise Postgres 

```sh
 docker run --name some-postgres \
     -e POSTGRES_USER=mild \
     -e POSTGRES_PASSWORD=bitter \
     -e POSTGRES_DB=ipa # Will default to POSTGRES_USER \
     -p 5432:5432 \
     -d postgres
```
