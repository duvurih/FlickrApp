# FlickrApp
Flicker App to view the publicly available images 

# Project Structure
- FlickrClient
    - Angular 7
    - Angular Material
    - Bootstrap
- Flickr Server
    - Nodejs v10.x
    - Nodmon Server
    - Expressjs
    - Express-promise-router
    - Axios
    - Unit Testing with mocha chai

# Build Process
- FlickrClient
    - ng server
    - ng build --prod --build-optimizer
- FlickrServer
    - npm run dev
    - npm run server

# Unit Testing
- FlickrClient
    - 
- FlickrServer
    - npm run test

# Deployment Process
- Docker Client App Setup
    - Create Docker Image: docker build -t angular-docker-image .
    - Run the Image: docker run -i -t -p 4200:80 angular-docker-image
    - Stop the container: docker stop angular-docker-image
    - Find the commands in "AngularClient.azcli"

- Docker Server App Setup
    - Configured based on yml file
    - Create and Run Docker Image: docker-compose -f docker-compose.yml up -d --build