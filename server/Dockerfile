FROM node

WORKDIR /app

COPY package.json .

RUN npm install -g npm@9.4.1

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "server"]