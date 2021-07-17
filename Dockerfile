# Current working version
FROM node:10.19.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 3000

# Bundle app source
COPY . .

CMD [ "npm", "start" ]
