FROM node:20

WORKDIR /code

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npm prune --production

EXPOSE 1337

# Command to run the application
CMD ["npm", "run", "start:prod"]