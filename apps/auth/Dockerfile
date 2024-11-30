FROM node:22.11.0-alpine3.20 AS development

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build auth

FROM node:22.11.0-alpine3.20 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install --production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/auth/main"]