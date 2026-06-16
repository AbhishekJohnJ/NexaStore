# NexaStore Deployment Guide

This guide covers deploying NexaStore to various hosting platforms.

## Prerequisites

- MongoDB Atlas account (for database)
- GitHub repository (for code hosting)
- Hosting platform account (Render, Heroku, Railway, etc.)

## 1. Database Setup (MongoDB Atlas)

1. **Create MongoDB Atlas Account**
   - Visit https://www.mongodb.com/cloud/atlas
   - Sign up for a free account

2. **Create a Cluster**
   - Click "Build a Database"
   - Choose "Free" tier (M0)
   - Select a cloud provider and region
   - Click "Create Cluster"

3. **Configure Database Access**
   - Go to "Database Access"
   - Add a new database user
   - Username: nexastore_admin
   - Password: (generate strong password)
   - Database User Privileges: Read and write to any database

4. **Configure Network Access**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Confirm

5. **Get Connection String**
   - Go to "Database" → "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Example: `mongodb+srv://nexastore_admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/nexastore?retryWrites=true&w=majority`

## 2. Backend Deployment (Render)

### Option A: Using Render

1. **Prepare Backend for Deployment**
   - Ensure all code is committed to GitHub
   - Verify package.json has correct start script

2. **Create Render Account**
   - Visit https://render.com
   - Sign up using GitHub

3. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - Name: nexastore-backend
     - Environment: Node
     - Region: Choose closest to you
     - Branch: main
     - Root Directory: backend
     - Build Command: `npm install`
     - Start Command: `npm start`

4. **Set Environment Variables**
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_very_secure_random_string_min_32_chars
   JWT_EXPIRE=7d
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Note your backend URL (e.g., https://nexastore-backend.onrender.com)

### Option B: Using Railway

1. **Create Railway Account**
   - Visit https://railway.app
   - Sign up with GitHub

2. **New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure Service**
   - Root Directory: `/backend`
   - Build Command: `npm install`
   - Start Command: `npm start`

4. **Add Environment Variables** (same as Render)

5. **Generate Domain**
   - Go to Settings → Generate Domain
   - Note your backend URL

## 3. Frontend Deployment (Vercel)

### Option A: Using Vercel

1. **Update API Configuration**
   - Edit `frontend/src/utils/api.js`
   - Update baseURL for production:
   ```javascript
   const api = axios.create({
     baseURL: process.env.NODE_ENV === 'production' 
       ? 'https://your-backend-url.onrender.com/api'
       : '/api',
     headers: {
       'Content-Type': 'application/json',
     },
   });
   ```

2. **Create Vercel Account**
   - Visit https://vercel.com
   - Sign up with GitHub

3. **Import Project**
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Root Directory: `frontend`

4. **Configure Build Settings**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

5. **Environment Variables** (if needed)
   ```
   VITE_API_URL=https://your-backend-url.onrender.com
   ```

6. **Deploy**
   - Click "Deploy"
   - Wait for deployment
   - Your app will be live at https://your-app.vercel.app

### Option B: Using Netlify

1. **Create Netlify Account**
   - Visit https://netlify.com
   - Sign up with GitHub

2. **New Site from Git**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select repository

3. **Configure Build**
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`

4. **Deploy**
   - Click "Deploy site"

## 4. Environment Variables Reference

### Backend (.env)
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nexastore
JWT_SECRET=your_super_long_and_secure_random_string_min_32_characters
JWT_EXPIRE=7d
```

### Frontend (if using environment variables)
```env
VITE_API_URL=https://your-backend-url.onrender.com
```

## 5. Post-Deployment Steps

1. **Seed Database**
   - SSH into your backend service or use the provided terminal
   - Run: `npm run seed`
   - This creates sample products and admin user

2. **Test Application**
   - Visit your frontend URL
   - Test user registration
   - Test login with demo credentials
   - Test product browsing
   - Test admin panel

3. **Setup CORS**
   - Update backend/server.js if needed:
   ```javascript
   app.use(cors({
     origin: ['https://your-frontend-url.vercel.app'],
     credentials: true
   }));
   ```

## 6. Continuous Deployment

Both Render/Railway and Vercel/Netlify support automatic deployments:

1. **Enable Auto-Deploy**
   - Automatic deployments trigger on git push to main branch
   - No manual intervention needed

2. **Preview Deployments**
   - Pull requests automatically get preview deployments
   - Test changes before merging

## 7. Monitoring & Maintenance

### Backend Monitoring
- Check Render/Railway logs for errors
- Monitor database usage in MongoDB Atlas
- Set up alerts for downtime

### Frontend Monitoring
- Check Vercel/Netlify analytics
- Monitor build logs
- Check for broken pages

### Database Backups
- MongoDB Atlas provides automatic backups
- Configure backup schedule in Atlas dashboard

## 8. Custom Domain (Optional)

### For Backend
1. Purchase domain from registrar
2. Add custom domain in Render/Railway settings
3. Update DNS records as instructed
4. SSL certificate automatically provisioned

### For Frontend
1. Go to Vercel/Netlify domain settings
2. Add custom domain
3. Update DNS records at your registrar
4. SSL certificate automatically provisioned

## 9. Scaling Considerations

### Backend Scaling
- Start with free tier
- Upgrade to paid plan for:
  - More RAM/CPU
  - No cold starts
  - Multiple instances

### Database Scaling
- Free tier: 512MB storage
- Upgrade to M10+ for:
  - More storage
  - Better performance
  - Advanced features

### Frontend Scaling
- Vercel/Netlify handle scaling automatically
- CDN distribution included
- Unlimited bandwidth on paid plans

## 10. Security Checklist

- [ ] Use strong JWT_SECRET (min 32 characters)
- [ ] Use environment variables for all secrets
- [ ] Enable MongoDB IP whitelist (or use 0.0.0.0/0 carefully)
- [ ] Use HTTPS (automatic with hosting platforms)
- [ ] Keep dependencies updated
- [ ] Enable CORS properly
- [ ] Use strong database passwords
- [ ] Implement rate limiting (optional)
- [ ] Regular security audits

## 11. Troubleshooting

### Backend Issues
- **Connection Errors**: Check MongoDB URI
- **JWT Errors**: Verify JWT_SECRET is set
- **Port Issues**: Ensure PORT variable is correct
- **CORS Errors**: Update CORS configuration

### Frontend Issues
- **API Errors**: Verify backend URL
- **Build Failures**: Check Node version compatibility
- **Routing Issues**: Configure redirects in Vercel/Netlify

### Database Issues
- **Connection Timeout**: Check IP whitelist
- **Authentication Failed**: Verify database credentials
- **Slow Queries**: Add database indexes

## 12. Cost Estimates

### Free Tier Limits
- **MongoDB Atlas**: 512MB storage, Shared CPU
- **Render/Railway**: 750 hours/month, 512MB RAM
- **Vercel/Netlify**: Unlimited bandwidth, 100GB/month

### Paid Tier (Approximate)
- **MongoDB Atlas M10**: $57/month
- **Render Standard**: $25/month per service
- **Vercel Pro**: $20/month
- **Total**: ~$100-150/month for production-ready setup

## Support

For deployment issues:
- Render: https://render.com/docs
- Railway: https://docs.railway.app
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- MongoDB Atlas: https://docs.atlas.mongodb.com

## Conclusion

Your NexaStore application is now deployed and ready for users! Remember to:
- Monitor logs regularly
- Keep dependencies updated
- Backup database regularly
- Scale as needed
- Maintain security best practices
