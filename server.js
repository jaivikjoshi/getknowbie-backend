#!/usr/bin/env node

// Set APP_KEYS explicitly if not set
if (!process.env.APP_KEYS) {
  process.env.APP_KEYS = 'key1,key2,key3,key4';
}

// Start Strapi
const strapiFactory = require('@strapi/strapi');
const strapi = strapiFactory();

strapi.start();
