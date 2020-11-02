# estágio de compilação
FROM node:14.15.0-alpine as build-stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# estágio de produção
EXPOSE 8080
CMD [ "node", "server.js" ]