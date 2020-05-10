FROM node:10

ENV NODE_ENV="production"
ENV PORT="80"
ENV DB_PRODUCTION="mongodb://user:pass@host/db"
ENV HOSTNAME="super-rentals-fullexample.herokuapp.com"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80
CMD [ "node", "index.js" ]
