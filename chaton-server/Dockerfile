FROM node:16.18-alpine3.15

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

COPY ./ ./src

RUN npm ci

CMD npm run dev
