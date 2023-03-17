FROM node:18.10.0-alpine As build
WORKDIR /code

RUN npm install -g @angular/cli@15.2.4
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4200

FROM nginx:1.15.8-alpine
#
COPY --from=build /code/dist/house-price-prediction-ui/ /usr/share/nginx/html

