FROM node:22-alpine

WORKDIR /app

COPY . .

WORKDIR /app/backend
RUN npm ci

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]