FROM node:16-alpine
RUN npm install -g pnpm --registry=https://registry.npmmirror.com

WORKDIR /app

# Setup a path for using local npm packages
RUN mkdir -p /opt/node_modules


COPY ./package.json /app
COPY ./pnpm-lock.yaml /app

RUN pnpm i

COPY ./ /app

RUN pnpm run client:build
# server build needs to run after client build because the client build using Vite
# removes the dist/ folder before compiling its code
RUN pnpm run server:build

EXPOSE 3001

CMD ["pnpm", "start"]
