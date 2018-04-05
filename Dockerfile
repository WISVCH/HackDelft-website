FROM nginx:alpine
RUN apk add yarn
RUN yarn build
COPY /build /usr/share/nginx/html
