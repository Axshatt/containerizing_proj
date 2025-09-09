FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm i


EXPOSE 3000

CMD [ "node","index.js" ]