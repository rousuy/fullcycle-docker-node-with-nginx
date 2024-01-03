FROM node:18

WORKDIR /code

COPY entrypoint.sh /opt/sbin/entrypoint.sh

RUN chmod +x /opt/sbin/entrypoint.sh

EXPOSE 3000

ENTRYPOINT [ "/opt/sbin/entrypoint.sh" ]
