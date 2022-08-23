FROM node

RUN mkdir /server

WORKDIR /server


COPY . .

EXPOSE 5000


RUN rm -rf node_modules package-lock.json
RUN npm install
CMD npm start
