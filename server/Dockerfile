FROM node

WORKDIR /app

COPY . .

RUN npm install -g npm@9.4.1

RUN npm install

EXPOSE 5000

CMD ["npm", "run", "server"]