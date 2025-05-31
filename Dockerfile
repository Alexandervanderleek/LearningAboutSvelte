FROM node:22-alpine

WORKDIR /app

COPY . .

WORKDIR /app/frontend
RUN npm i

WORKDIR /app/backend
RUN npm i

EXPOSE 3000

CMD ["npm", "start"]