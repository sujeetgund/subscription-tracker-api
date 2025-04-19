# Use an official Node.js LTS image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only the necessary files to install dependencies first (for caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Expose the port your app runs on
EXPOSE 5500

# Define the command to run the app
CMD ["pnpm", "start"]
