FROM nginx:alpine
RUN yarn build
COPY /build /usr/share/nginx/html
