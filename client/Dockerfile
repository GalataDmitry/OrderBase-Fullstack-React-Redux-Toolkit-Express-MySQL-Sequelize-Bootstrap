FROM node

WORKDIR /app

COPY package.json .

RUN npm install -g npm@9.4.2

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]