FROM node:alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . . 

EXPOSE 6666