FROM node:12.13.1
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node","server.js"]

