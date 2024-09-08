# Use an official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies (including bcrypt and other native modules)
RUN npm install

# Copy the rest of the application code
COPY . .

# Install sqlite3 and other native modules from source
RUN npm install sqlite3 --build-from-source

# Expose the port the app will run on
EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "serve"]
