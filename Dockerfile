FROM node:carbon AS builder
WORKDIR /src
COPY . .
RUN yarn
RUN yarn build

FROM wisvch/nginx
COPY --from=builder /src/build/ /srv/
