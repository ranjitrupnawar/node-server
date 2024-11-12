# Start from the official Cypress image
FROM cypress/included:13.13.1  # Replace with the latest compatible Cypress image version

# Set working directory
WORKDIR /e2e

# Copy project files
COPY . .

# Install project dependencies
RUN npm install

# Expose default Cypress port (optional)
EXPOSE 3000

# Command to run Cypress tests by default
CMD ["npx", "cypress", "run"]
