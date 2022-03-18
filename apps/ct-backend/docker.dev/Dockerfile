FROM node:14.19.1-buster

EXPOSE 3000

WORKDIR /app

ENTRYPOINT ["/usr/bin/docker-entrypoint.sh"]
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
ENV PATH "$PATH:/app/node_modules/.bin"
ENV DEBUG "*"

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get -q -y install supervisor && \
    apt-get -q -y autoremove && \
    rm -Rf /var/lib/apt/lists/*

COPY apps/ct-backend/docker.dev/. /
RUN chmod 0755 /usr/bin/docker-entrypoint.sh
