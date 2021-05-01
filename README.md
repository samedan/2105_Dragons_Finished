# 2104_dragons_postgresql_react

> > UDEMY
> > https://www.udemy.com/course/full-stack/learn/lecture/11555704#overview

# Source

https://github.com/15Dkatz/dragonstack-guides

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

# Write the Database

Run in the backend directory :
npm run configure
