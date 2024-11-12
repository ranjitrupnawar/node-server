# Use a Cypress included image that has all dependencies installed
FROM cypress/included:13.13.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Run Cypress tests
CMD ["npx", "cypress", "run"]
