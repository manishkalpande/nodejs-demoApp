# Step 1: Use official Node.js LTS image
FROM node:20-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install --production

# Step 5: Copy source code
COPY src ./src

# Step 6: Expose application port
EXPOSE 3000

# Step 7: Start the application
CMD ["node", "src/index.js"]
