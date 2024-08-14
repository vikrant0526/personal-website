FROM golang AS builder

WORKDIR /app

RUN go install github.com/a-h/templ/cmd/templ@latest

COPY go.mod go.sum ./
RUN go mod download && go mod verify

COPY . .
RUN make build

FROM node:21-alpine3.19 AS asset

WORKDIR /app

COPY --from=builder /app/yarn.lock /app/package.json ./
RUN yarn install

COPY --from=builder /app/ .
RUN yarn build

FROM ubuntu

WORKDIR /app

COPY --from=asset /app/bin/app ./
COPY --from=asset /app/assets ./assets
COPY --from=asset /app/.env ./

EXPOSE 3000

CMD ["./app"]
