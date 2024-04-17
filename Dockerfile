FROM ubuntu:20.04 as builder

WORKDIR /build

RUN \
    set -eux; \
    apt-get update && \
    apt-get install -y curl build-essential python git && \
    curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install --global yarn

COPY next.config.js package.json postcss.config.js tailwind.config.ts tsconfig.json yarn.lock .prettierrc .eslintrc entrypoint.sh ./

RUN \
    set -eux; \
    yarn install --frozen-lockfile

COPY src src
COPY public public

RUN \
    set -eux; \
    yarn run build

FROM node:latest

WORKDIR /app

COPY --from=builder /build /app/

EXPOSE 3000

ENTRYPOINT [ "/app/entrypoint.sh" ]
