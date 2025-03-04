#!/bin/bash

# Exit on error
set -e

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the Strapi application
echo "Building Strapi application..."
npm run build

echo "Build completed successfully!"
