FROM nginx:alpine
COPY . /react
RUN apk update
RUN apk add yarn
RUN cd /react && yarn && yarn build
RUN mv /react/build/* /usr/share/nginx/html
