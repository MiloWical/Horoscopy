####### BEGIN COMPILETIME CONTAINER DEFINITION #######

FROM node:10.9.0 AS Compiletime

RUN apt-get update && \
    apt-get -y install xml2

RUN mkdir -p /_src/app
WORKDIR /_src/app

ENV PATH /_src/app/node_modules/.bin:$PATH

COPY ./package.json /_src/app/package.json

RUN npm install
RUN npm install -g @angular/cli@6.1.5

COPY . /_src/app

#The extra "--" in this command passes the parameter to the underlying 'ng build' command as an argument.
RUN npm run build -- --output-path=./dist/out

 RUN html2 < /_src/app/dist/out/index.html | sed 's!/html/head/base/@href=/.*!/html/head/base/@href={{URL_BASE_PREFIX}}!' | 2html > /_src/app/dist/out/index.html

####### END COMPILETIME CONTAINER DEFINITION #######

####### BEGIN RUNTIME CONTAINER DEFINITION #######

FROM nginx:1.15.2-alpine AS Runtime

ENV SOURCE_CONFIG_FILE "/usr/share/nginx/html/assets/app-config.json"
ENV TARGET_CONFIG_FILE = "/usr/share/nginx/html/assets/app-config.json"

ENV URL_BASE_PREFIX "/"

# Set the SERVICE_CONFIGURATION at runtime to pass a custom config.
# The configuration must have the quote symbols escaped
# (NOTE: This has the highest priority.)

COPY --from=Compiletime /_src/app/dist/out /usr/share/nginx/html

COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./config/startup.sh /

EXPOSE 80/tcp

CMD ["/bin/sh", "startup.sh"]

####### END RUNTIME CONTAINER DEFINITION #######