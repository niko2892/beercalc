FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "/app/index.js"]
EXPOSE 60000
