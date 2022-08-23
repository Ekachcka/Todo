FROM node

RUN mkdir -p ./client

WORKDIR /client


COPY package*.json ./


COPY . .

EXPOSE 3000



RUN rm -rf node_modules
RUN npm install
CMD ["npm", "start"] 
