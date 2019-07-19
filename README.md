#Run Server

1. npm install
2. Create Postgres database and run features-v2.sql
3. Configure database url in the beginning of postgres.js
4. npm start

#Display Collected Stats

1. Configure database url and schema name in the beginning of queries/queries.js
2. node queries/queries.js > out.html
3. Open out.html

# Use client

1. Clone https://github.com/lifeonairteam/rtcstats

```
$npm i
$npm run dist
```

2. Include rtcstats.js before any of webrtc javascript.

```
<script src='/path/to/rtcstats.js'></script>
```

3. Configure server url in rtcstats.js