FROM node:lts-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies (both packages)
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081

CMD [ "node", "server.js" ]