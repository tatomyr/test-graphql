# A Simple GraphQL Server

To start the project create a bash file (e. g. `start`) with such content:
```
#!/bin/bash

MONGO_URL=mongodb://<path>/<dbname> DB_NAME=<dbname> node index.js
```

Then run `bash start`. The app will run on `localhost:8080`.
