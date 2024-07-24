# Stage 1: Build the Angular application
FROM node:20.16-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the project files into the container
COPY . .

# Install dependencies
RUN npm ci

# Build the Angular Universal application
RUN npm run build:ssr

# Stage 2: Set up Nginx to serve the client-side application
FROM nginx:latest AS client

# Copy the custom nginx configuration file to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the client-side application from the build stage to the nginx html directory
COPY --from=build /app/dist/lukas-boecker.de/browser /usr/share/nginx/html

# Stage 3: Set up Node.js server for SSR
FROM node:20.16-alpine AS server

# Set the working directory
WORKDIR /app

# Copy the server-side application from the build stage
COPY --from=build /app/dist/lukas-boecker.de/server /app

# Copy the Node.js dependencies
COPY package*.json ./

# Install only the production dependencies
RUN npm ci --only=production

# Expose the port that the server will run on
EXPOSE 4000

# Command to run the Node.js server
CMD ["node", "main.js"]
