# Current working version
FROM node:10.19.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json ./

RUN npm install

EXPOSE 3000

# Bundle app source
COPY . .

CMD [ "npm", "start" ]
