FROM node:carbon AS builder
WORKDIR /src
COPY . .
RUN yarn
RUN yarn build

FROM nginx:alpine
COPY --from=builder /src/build /usr/share/nginx/html
