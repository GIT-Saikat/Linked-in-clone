# Deployment Guide

This guide will walk you through deploying your LinkedIn Clone application to production.

## Prerequisites

- GitHub account
- Completed application code
- MongoDB Atlas account (for database)

## Step 1: Setup MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and log in
3. Create a new cluster (free tier is fine)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database user password
7. Replace `myFirstDatabase` with `linkedin-clone`

Example: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/linkedin-clone?retryWrites=true&w=majority`

## Step 2: Push Code to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - LinkedIn Clone"

# Add remote repository
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy Backend

### Option A: Render (Recommended)

1. **Sign up at [Render](https://render.com/)**

2. **Create New Web Service:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure settings:
     - **Name**: `linkedin-clone-backend`
     - **Region**: Choose closest to you
     - **Branch**: `main`
     - **Root Directory**: `backend`
     - **Runtime**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`

3. **Add Environment Variables:**
   - Click "Environment" tab
   - Add these variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_atlas_connection_string
     JWT_SECRET=your_very_secure_random_string_here
     NODE_ENV=production
     ```

4. **Deploy**: Click "Create Web Service"

5. **Note your backend URL**: It will be something like `https://linkedin-clone-backend.onrender.com`

### Option B: Railway

1. **Sign up at [Railway](https://railway.app/)**

2. **Create New Project:**
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository

3. **Add MongoDB:**
   - Click "New" → "Database" → "Add MongoDB"
   - Railway will automatically create `MONGO_URL` variable

4. **Configure Service:**
   - Click on your service
   - Go to "Settings"
   - Set root directory to `backend`
   - Add environment variables (if not using Railway MongoDB)

5. **Deploy**: Railway will auto-deploy

## Step 4: Deploy Frontend

### Option A: Vercel (Recommended)

1. **Sign up at [Vercel](https://vercel.com/)**

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Import your GitHub repository

3. **Configure Project:**
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

4. **Update API URL:**
   Before deploying, update the frontend to use your production backend URL.
   
   Create `frontend/.env.production`:
   ```
   REACT_APP_API_URL=https://your-backend-url.onrender.com
   ```
   
   Update `frontend/src/context/AuthContext.js` to use the environment variable:
   ```javascript
   const API_URL = process.env.REACT_APP_API_URL || '';
   // Use API_URL in axios calls
   ```

5. **Deploy**: Click "Deploy"

6. **Note your frontend URL**: It will be something like `https://linkedin-clone-yourname.vercel.app`

### Option B: Netlify

1. **Sign up at [Netlify](https://www.netlify.com/)**

2. **Create New Site:**
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository

3. **Build Settings:**
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/build`

4. **Environment Variables:**
   - Go to "Site settings" → "Build & deploy" → "Environment"
   - Add: `REACT_APP_API_URL=https://your-backend-url.onrender.com`

5. **Deploy**: Click "Deploy site"

## Step 5: Update CORS Settings

Update your backend `server.js` to allow your frontend domain:

```javascript
// backend/server.js
const cors = require('cors');

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://your-frontend-url.vercel.app'  // Add your production URL
  ],
  credentials: true
};

app.use(cors(corsOptions));
```

Redeploy your backend after this change.

## Step 6: Test Your Deployment

1. Visit your frontend URL
2. Sign up for a new account
3. Log in
4. Create a post
5. Test all features (like, comment, edit, delete)
6. Check that images upload correctly

## Common Issues and Solutions

### Issue: "Network Error" or "Cannot connect to backend"

**Solution:** 
- Check that backend is running (visit backend URL directly)
- Verify CORS settings
- Check that frontend is using correct backend URL
- Check browser console for specific errors

### Issue: "MongoDB connection failed"

**Solution:**
- Verify MongoDB Atlas connection string
- Check that your IP is whitelisted (or use 0.0.0.0/0 for allow all)
- Ensure database user has correct permissions
- Test connection string locally first

### Issue: Images not loading

**Solution:**
- In production, consider using cloud storage (Cloudinary, AWS S3)
- For Render, note that file uploads may not persist on free tier
- Update image URLs to use absolute paths

### Issue: JWT token issues

**Solution:**
- Ensure JWT_SECRET is set in production
- Check that token is being sent with requests
- Verify token expiration settings

## Production Optimization Tips

1. **Enable MongoDB indexes** for better query performance
2. **Use environment variables** for all sensitive data
3. **Add rate limiting** to prevent abuse
4. **Implement caching** for frequently accessed data
5. **Use CDN** for static assets
6. **Monitor logs** for errors
7. **Set up automated backups** for MongoDB

## Submission Checklist

Before submitting your assignment:

- [ ] Backend is deployed and accessible
- [ ] Frontend is deployed and accessible
- [ ] All features are working in production
- [ ] README.md is complete with setup instructions
- [ ] GitHub repository is public (or shared with assessors)
- [ ] Environment variables are properly configured
- [ ] CORS is configured for production URLs
- [ ] Test all features thoroughly

## Final Submission

Send an email to **hr@appdost.in** with:

1. **GitHub Repository Link**: `https://github.com/yourusername/your-repo-name`
2. **Live Frontend URL**: `https://your-app.vercel.app`
3. **Live Backend URL**: `https://your-backend.onrender.com`
4. **Brief Description**: Any additional notes or features you added

---

**Good luck with your deployment!** 🚀

If you encounter any issues, review the error logs in your deployment platforms and check the troubleshooting section above.

