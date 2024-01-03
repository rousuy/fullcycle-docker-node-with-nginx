FROM mysql:8.2.0

COPY init.sql /docker-entrypoint-initdb.d/

CMD [ "--innodb-use-native-aio=0" ]