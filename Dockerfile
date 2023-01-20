FROM node:18

# Set the working directory in the container
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4200
CMD ["npm", "start"]
