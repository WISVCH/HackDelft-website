FROM node:argon

RUN mkdir /app
WORKDIR /app

RUN npm install nodemon gulp-cli -g

COPY package.json /app
RUN npm install

COPY . /app

RUN gulp es6
RUN gulp sass

EXPOSE 3000

CMD ["npm", "start"]