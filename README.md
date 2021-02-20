# ABSOLUT-PSYCO

DDD, SOLID Pratice Project

>## Starting application through PM2

```sh
pm2 start ./public/Application/server.js \
    --name "name here" \
    --node-args="--max_old_space_size=10000" \
    --log-date-format 'DD-MM-YYYY HH:mm:ss' \
    -o "/data/XXX-out.log" \
    -e "/data/XXX-err.log"
```