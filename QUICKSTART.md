# Quick Start Guide

Get your LinkedIn Clone up and running in 5 minutes!

## Prerequisites Check

Before you begin, ensure you have:
- ✅ Node.js installed (check: `node --version`)
- ✅ MongoDB installed and running (check: `mongod --version`)
- ✅ npm or yarn installed (check: `npm --version`)

## Installation Steps

### 1. Install Dependencies

Open two terminal windows:

**Terminal 1 - Backend:**
```bash
cd backend
npm install
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
```

### 2. Configure Environment

The backend `.env` file is already created with default settings:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/linkedin-clone
JWT_SECRET=your_jwt_secret_key_change_this_in_production_12345
NODE_ENV=development
```

**Note:** For production, change the `JWT_SECRET` to a secure random string!

### 3. Start MongoDB

**Windows (as Administrator):**
```bash
net start MongoDB
```

**macOS:**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
```

### 4. Run the Application

**Terminal 1 - Start Backend:**
```bash
cd backend
npm start
```
You should see: `Server is running on port 5000` and `MongoDB connected successfully`

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm start
```
The app will automatically open at `http://localhost:3000`

## First Time Usage

1. Click **"Sign up"** on the login page
2. Fill in your details:
   - Name: Your full name
   - Email: your@email.com
   - Password: At least 6 characters
3. You'll be automatically logged in
4. Create your first post!

## Testing the Features

### ✅ Authentication
- Sign up with a new account
- Log out using the logout button
- Log in again

### ✅ Posts
- Create a text post
- Create a post with an image
- Edit your post (click the edit icon)
- Delete your post (click the trash icon)

### ✅ Interactions
- Like a post (click the thumbs up)
- Unlike a post (click the thumbs up again)
- Add a comment
- View comment count

### ✅ Profile
- Click on a user's name
- View their profile and posts
- Click "Profile" in the navigation to see your own profile

## Troubleshooting

### "MongoDB connection error"
- Ensure MongoDB is running
- Check the connection string in `.env`
- Default: `mongodb://localhost:27017/linkedin-clone`

### "Port 5000 already in use"
- Change the PORT in `backend/.env` to a different number (e.g., 5001)
- Update the proxy in `frontend/package.json` to match

### "Cannot find module"
- Delete `node_modules` folder
- Run `npm install` again

### Frontend won't start
- Make sure you're in the `frontend` directory
- Try deleting `node_modules` and `package-lock.json`
- Run `npm install` again

### Images not uploading
- Check that `backend/uploads/` directory exists
- Check file size (max 5MB)
- Only image files are allowed (jpg, png, gif)

## Common Commands

### Backend
```bash
# Start server
npm start

# Start with auto-reload (development)
npm run dev

# Install new package
npm install package-name
```

### Frontend
```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## Development Tips

1. **Keep both terminals running** - backend and frontend
2. **Check terminal for errors** - they provide helpful information
3. **Use Chrome DevTools** - Press F12 to see console errors
4. **Test in incognito mode** - to avoid cache issues
5. **Clear browser cache** - if you see stale data

## Next Steps

After getting the app running:

1. **Customize**: Update colors, logos, and styles
2. **Add features**: Implement additional functionality
3. **Deploy**: Follow the `DEPLOYMENT.md` guide
4. **Test thoroughly**: Try all features before submission

## Need Help?

- Check `README.md` for detailed documentation
- Review error messages in the terminal
- Check browser console (F12) for frontend errors
- Review `DEPLOYMENT.md` for deployment issues

## Ready to Deploy?

Once everything works locally:
1. Review the `DEPLOYMENT.md` file
2. Push your code to GitHub
3. Deploy backend to Render/Railway
4. Deploy frontend to Vercel/Netlify
5. Test the live application
6. Submit your project!

---

**Happy Coding! 🚀**

