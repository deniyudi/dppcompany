#Use the official Node image as the base image
FROM node:16-alpine
 
# Set the working directory in the container
WORKDIR /app
 
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
 
# Install dependencies
RUN npm install --force
 
# Copy the rest of the application code
COPY . .
 
# Expose the port that the app will run on`
EXPOSE 3000
 
# Command to start the application
CMD ["npm", "start"]
