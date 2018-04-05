FROM nginx:alpine
RUN apk update
RUN apk add yarn
RUN yarn build
COPY /build /usr/share/nginx/html
