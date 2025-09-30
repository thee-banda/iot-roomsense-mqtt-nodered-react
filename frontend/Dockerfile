# syntax=docker/dockerfile:1

FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY tsconfig.json ./
COPY tsconfig.app.json ./
COPY tsconfig.node.json ./
COPY vite.config.ts ./
COPY eslint.config.js ./
COPY public ./public
COPY src ./src

ARG VITE_BACKEND_URL=/api
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}
RUN npm run build

FROM nginx:1.27-alpine AS production
WORKDIR /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist ./

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
