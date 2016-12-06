FROM node:argon

RUN mkdir /app
WORKDIR /app

RUN npm install nodemon -g

COPY package.json /app
RUN npm install

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]