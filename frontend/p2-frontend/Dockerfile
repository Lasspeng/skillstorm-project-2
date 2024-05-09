FROM node:18-alpine

WORKDIR /p2-frontend

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]

EXPOSE 3000
