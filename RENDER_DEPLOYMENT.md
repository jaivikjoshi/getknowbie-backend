# Deploying Strapi to Render

This guide explains how to deploy your Strapi application to Render.

## Prerequisites

1. A Render account (sign up at [render.com](https://render.com))
2. Your Strapi project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Connect Your Repository to Render

1. Log in to your Render account
2. Click on the "New" button in the dashboard
3. Select "Blueprint" from the dropdown menu
4. Connect your Git repository that contains the Strapi project
5. Render will automatically detect the `render.yaml` file and configure your services

### 2. Configure Environment Variables

The `render.yaml` file already includes the necessary environment variables for your Strapi application. Render will automatically generate values for:

- `JWT_SECRET`
- `ADMIN_JWT_SECRET`
- `API_TOKEN_SALT`
- `TRANSFER_TOKEN_SALT`
- `APP_KEYS`

### 3. Database Configuration

The `render.yaml` file configures a PostgreSQL database for your Strapi application. Render will automatically:

1. Create a PostgreSQL database
2. Configure the `DATABASE_URL` environment variable

### 4. Deploy Your Application

1. Click on the "Apply Blueprint" button
2. Render will create the necessary services and deploy your Strapi application
3. Wait for the deployment to complete (this may take a few minutes)

### 5. Access Your Strapi Admin Panel

Once the deployment is complete, you can access your Strapi admin panel at:

```
https://getknowbie-strapi.onrender.com/admin
```

You'll need to create a new admin user the first time you access the panel.

## Troubleshooting

If you encounter any issues during deployment, check the logs in the Render dashboard for your web service.

Common issues include:

1. **Database connection errors**: Ensure your database configuration is correct
2. **Build errors**: Check if there are any issues with your Strapi application build
3. **Environment variable issues**: Verify all required environment variables are set correctly

## Updating Your Deployment

Any changes pushed to your Git repository will automatically trigger a new deployment on Render.

## Additional Resources

- [Render Documentation](https://render.com/docs)
- [Strapi Documentation](https://docs.strapi.io)
