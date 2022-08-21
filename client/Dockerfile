FROM node:16-alpine

RUN mkdir -p ./client

WORKDIR /client

RUN npm install

COPY . .

EXPOSE 3000


CMD npm start
