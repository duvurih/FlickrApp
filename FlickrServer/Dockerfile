#Express Server
FROM node:10.13.0 as express-server
WORKDIR /app/server
COPY package.json /app/server
RUN npm install
COPY /src /app/server/src
COPY /test /app/server/test
#RUN npm run dev

#Final Image
FROM node:10.13.0
RUN mkdir -p /usr/app/server
WORKDIR /usr/app/server
COPY --from=express-server /app/server /usr/app/server

EXPOSE 3000
CMD ["node","src/app.js" ]

