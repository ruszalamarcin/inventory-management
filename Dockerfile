FROM node:20 as dependencies
WORKDIR /app
RUN apt-get update 

COPY . /app
RUN npm ci

RUN \
  npm prune --production && \
  find ./node_modules/ -name '*.md' -or -name 'LICENSE' | xargs rm -rf

FROM node:20
WORKDIR /app

EXPOSE 3001
ENTRYPOINT ["node", "./dist/server.js"]