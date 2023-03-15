FROM nginx:1.21.6-alpine
FROM node:16-alpine

WORKDIR /opt/app

COPY ./dist /opt/app
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 9001