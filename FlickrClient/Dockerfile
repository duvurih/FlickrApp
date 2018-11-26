#Angular Client
FROM node:10.13.0 as angular-client
LABEL authors="Hari Krishna Duvuri"
#Copy and Install Augular App
WORKDIR /app/client
COPY . /app/client
RUN npm install
# RUN ng build --prod
RUN $(npm bin)/ng build

#Final Image
FROM nginx
RUN mkdir -p /usr/app/client
WORKDIR /usr/app/client
COPY --from=angular-client /app/client/dist/FlickrClient /usr/share/nginx/html/

EXPOSE 80
