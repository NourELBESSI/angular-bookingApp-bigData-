# # FROM node:18

# # Copy package files
# COPY package*.json ./

# # Install dependencies
# RUN npm install -g @angular/cli

# # Copy app files
# COPY . .

# ENV PATH="${PATH}:/usr/local/lib/node_modules/@angular/cli/bin"
# CMD ["/bin/bash", "-c", "export PATH=$PATH:/usr/local/lib/node_modules/@angular/cli/bin && ng serve --host 0.0.0.0"]

# FROM node:latest
# RUN mkdir /usr/src/app
# WORKDIR /usr/src/appRUN npm install -g @angular/cli
# COPY ..

# Use an official Node.js 18 image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app's dependencies in the container
RUN npm install

# Copy the rest of the app's code to the container
COPY . .

# Build the app in the container
RUN npm run build

# Expose the port that the app will run on
EXPOSE 4200

# Start the app in the container
CMD ["npm", "start"]
