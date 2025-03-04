#!/bin/bash

# Exit on error
set -e

# Set APP_KEYS explicitly
export APP_KEYS="key1,key2,key3,key4"

# Start the Strapi application
echo "Starting Strapi application..."
npm run start
