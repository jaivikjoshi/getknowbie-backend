#!/usr/bin/env node

// Set APP_KEYS explicitly if not set
if (!process.env.APP_KEYS) {
  process.env.APP_KEYS = 'key1,key2,key3,key4';
}

// Log the APP_KEYS to verify they're set
console.log('APP_KEYS:', process.env.APP_KEYS);

// Start Strapi using the CLI
const { execSync } = require('child_process');
try {
  console.log('Starting Strapi...');
  execSync('npx strapi start', { stdio: 'inherit' });
} catch (error) {
  console.error('Error starting Strapi:', error);
  process.exit(1);
}
