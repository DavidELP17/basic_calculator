# Current working version
FROM node:10.19.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json ./

RUN npm install
RUN npm -y init
RUN npm install express
RUN npm install —save-dev nodemon
RUN npm i jest --save-dev
RUN npm install sonarqube-scanner --save-dev
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 3000

# Bundle app source
COPY . .

CMD [ "npm", "start" ]
