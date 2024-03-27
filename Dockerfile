FROM node:20-bullseye AS frontend

WORKDIR /app

COPY . /app
RUN npm i -g @aws-amplify/cli
