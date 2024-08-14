FROM node:21-alpine3.19 AS assetbuilder

WORKDIR /app-assets

COPY yarn.lock package.json ./
RUN yarn install

COPY . .

FROM golang AS builder

WORKDIR /app
COPY --from=assetbuilder /app-assets ./

RUN go install github.com/a-h/templ/cmd/templ@latest

COPY go.mod go.sum ./
RUN go mod download && go mod verify

RUN make build

# EXPOSE 3000
# CMD ["./bin/app"]

FROM ubuntu

WORKDIR /app-runner

COPY --from=builder /app/bin/app ./
COPY --from=builder /app/assets ./assets
COPY --from=builder /app/.env ./

EXPOSE 3000

CMD ["./app"]
