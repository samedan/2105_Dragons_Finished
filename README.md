# 2104_dragons_postgresql_react

> > UDEMY
> > https://www.udemy.com/course/full-stack/learn/lecture/11555704#overview

# Source

https://github.com/15Dkatz/dragonstack-guides
https://davidtkatz.com/#/about
Deploy:
https://docs.google.com/document/d/1_KlsuzyN38u7pwPVoEGt5hcC3SveoUx-S0eSdfjWVAo/edit?usp=sharing

# create files

/backend/secrets/databaseConfiguration.js

```
module.exports = {
user: "",
host: "",
database: "",
password: "",
port: 5432,
};

/backend/secrets/index.js

const APP_SECRET = "";
module.exports = { APP_SECRET };

/frontend/config.js

const BACKEND = {
  ADDRESS: "http://localhost:3000",
};
export { BACKEND };
```

# Prepare the Database

> > Create DB
> > createdb -U postgres dragonstackdb

> > Connect to DB
> > psql -U postgres dragonstackdb

> > Change to the new DB
> > \c dragonstackdb

> > CREATE USER for the DB
> > CREATE USER dragon_user WITH SUPERUSER PASSWORD 'Fuckyahoo667';

> > See users
> > SELECT \* FROM pg_user;

> > EXIT environment
> > \q

> > SEE TABLES
> > \d
> > SEE Table formatted SCHEMA
> > \d+ generation

# BEFORE writing teh Database

backend/bin/configure_db.sh

# Write the Database

Run in the backend directory :
npm run configure

# Write the dev dependencies

npm i concurrently -g
