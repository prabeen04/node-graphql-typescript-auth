FROM node:8

# create working directory
WORKDIR /usr/src/app

# copy package.json and package.lock.json

COPY package*.json ./

# npm install

RUN npm install

# copy everything
COPY . .

# expose port
EXPOSE 4000

# Start server

CMD [ "npm", "start" ]