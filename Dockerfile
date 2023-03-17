FROM node:18.10.0-alpine
WORKDIR /usr/src/ng-app

RUN npm install -g @angular/cli@15.2.4
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

CMD ["ng", "serve", "--host", "0.0.0.0"]


