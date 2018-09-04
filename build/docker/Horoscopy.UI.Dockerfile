####### BEGIN COMPILETIME CONTAINER DEFINITION #######

FROM node:10.9.0 AS Compiletime

RUN mkdir -p /_src/app
WORKDIR /_src/app

ENV PATH /_src/app/node_modules/.bin:$PATH

COPY ./package.json /_src/app/package.json

RUN npm install
RUN npm install -g @angular/cli@6.1.5 

COPY . /_src/app

#The extra "--" in this command passes the parameter to the underlying 'ng build' command as an argument.
RUN npm run build -- --output-path=./dist/out

####### END COMPILETIME CONTAINER DEFINITION #######

####### BEGIN RUNTIME CONTAINER DEFINITION #######

FROM nginx:1.15.2-alpine AS Runtime

COPY --from=Compiletime /_src/app/dist/out /usr/share/nginx/html

COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80/tcp

####### END RUNTIME CONTAINER DEFINITION #######