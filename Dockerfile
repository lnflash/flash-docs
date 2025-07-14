# Use the official Node.js image
FROM node:18.10.0-alpine

# Set the working directory
WORKDIR /app

# Copy the project files
COPY . .

# Install dependencies
RUN npm install

# Build the project with increased memory limit
RUN NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Expose port 3000
EXPOSE 3000

# Start the server
CMD ["npm", "start"]