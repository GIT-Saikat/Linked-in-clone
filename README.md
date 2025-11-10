# LinkedIn Clone - Social Media Website

A full-stack social media web application inspired by LinkedIn, built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can sign up, log in, create posts, like and comment on posts, and view profiles.

![LinkedIn Clone](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)

## 🚀 Features

### Core Features
- ✅ **User Authentication**: Secure signup and login with JWT tokens
- ✅ **Create Posts**: Share text posts with optional images
- ✅ **View Feed**: See all posts from users in chronological order (latest first)
- ✅ **User Profiles**: View user profile with their posts

### Bonus Features
- ✅ **Like Posts**: Like/unlike posts with real-time updates
- ✅ **Comments**: Add comments to posts
- ✅ **Edit Posts**: Edit your own posts
- ✅ **Delete Posts**: Delete your own posts
- ✅ **Image Upload**: Upload images with posts
- ✅ **Responsive Design**: Mobile-friendly UI
- ✅ **Modern UI/UX**: Clean and professional interface

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **React Icons** - Icon library
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcrypt.js** - Password hashing
- **Multer** - File upload handling

## 📁 Project Structure

```
Social Media Website/
├── backend/
│   ├── middleware/
│   │   └── auth.js              # JWT authentication middleware
│   ├── models/
│   │   ├── User.js              # User model
│   │   └── Post.js              # Post model
│   ├── routes/
│   │   ├── auth.js              # Authentication routes
│   │   ├── posts.js             # Post routes
│   │   └── users.js             # User routes
│   ├── uploads/                 # Uploaded images
│   ├── .env                     # Environment variables
│   ├── .gitignore
│   ├── package.json
│   └── server.js                # Entry point
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── CreatePost.js    # Create post component
│   │   │   ├── CreatePost.css
│   │   │   ├── Navbar.js        # Navigation bar
│   │   │   ├── Navbar.css
│   │   │   ├── PostCard.js      # Individual post component
│   │   │   ├── PostCard.css
│   │   │   └── PrivateRoute.js  # Protected route wrapper
│   │   ├── context/
│   │   │   └── AuthContext.js   # Authentication context
│   │   ├── pages/
│   │   │   ├── Feed.js          # Main feed page
│   │   │   ├── Feed.css
│   │   │   ├── Login.js         # Login page
│   │   │   ├── Profile.js       # User profile page
│   │   │   ├── Profile.css
│   │   │   └── Signup.js        # Signup page
│   │   ├── App.js               # Main app component
│   │   ├── App.css
│   │   ├── index.js             # Entry point
│   │   └── index.css
│   ├── .gitignore
│   └── package.json
│
├── Assignment.md                # Project requirements
└── README.md                    # This file
```

## 🚦 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v4 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** - Comes with Node.js

### Installation

#### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd "Social Media Website"
```

#### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
# Copy the contents from .env.example and configure your settings
cp .env.example .env

# Edit .env file with your configuration
# Required variables:
# - PORT=5000
# - MONGODB_URI=mongodb://localhost:27017/linkedin-clone
# - JWT_SECRET=your_secret_key_here
# - NODE_ENV=development
```

**Create uploads directory:**

```bash
mkdir uploads
```

#### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install
```

### Running the Application

#### Method 1: Running Both Servers Separately

**Terminal 1 - Backend:**
```bash
cd backend
npm start
# Or for development with auto-reload:
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

The application will open at `http://localhost:3000`

#### Method 2: Running MongoDB (if not running as service)

If MongoDB is not running as a service, start it first:

```bash
# On Windows (run as Administrator)
net start MongoDB

# On macOS/Linux
sudo systemctl start mongod
# or
brew services start mongodb-community
```

### Default Configuration

- **Frontend**: `http://localhost:3000`
- **Backend API**: `http://localhost:5000`
- **MongoDB**: `mongodb://localhost:27017/linkedin-clone`

## 🧪 Testing the Application

1. **Sign Up**: Create a new account with your name, email, and password
2. **Login**: Log in with your credentials
3. **Create Post**: Write your first post and optionally add an image
4. **Interact**: Like, comment on posts, and view other users' profiles
5. **Edit/Delete**: Edit or delete your own posts
6. **Profile**: View your profile and posts

## 📱 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)

### Posts
- `GET /api/posts` - Get all posts (Protected)
- `POST /api/posts` - Create a new post (Protected)
- `PUT /api/posts/:id` - Update a post (Protected)
- `DELETE /api/posts/:id` - Delete a post (Protected)
- `POST /api/posts/:id/like` - Like/Unlike a post (Protected)
- `POST /api/posts/:id/comment` - Comment on a post (Protected)

### Users
- `GET /api/users/:id` - Get user profile and posts (Protected)

## 🚀 Deployment

### Backend Deployment (Railway/Render)

#### Using Render:

1. Create account on [Render](https://render.com/)
2. Create new Web Service
3. Connect your GitHub repository
4. Configure:
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Environment Variables**: Add all variables from `.env`
5. Deploy

#### Using Railway:

1. Create account on [Railway](https://railway.app/)
2. Create new project from GitHub repo
3. Add MongoDB database from Railway marketplace
4. Set environment variables
5. Deploy

### Frontend Deployment (Vercel/Netlify)

#### Using Vercel:

1. Install Vercel CLI: `npm install -g vercel`
2. Navigate to frontend directory: `cd frontend`
3. Run: `vercel`
4. Follow prompts
5. Update API URL in production to your backend URL

#### Using Netlify:

1. Create account on [Netlify](https://www.netlify.com/)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/build`
5. Add environment variable for production API URL
6. Deploy

### Environment Variables for Production

**Backend (.env):**
```
PORT=5000
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_very_secure_secret_key
NODE_ENV=production
```

**Frontend:**
Update the axios base URL to point to your deployed backend.

## 🔒 Security Features

- ✅ Password hashing with bcrypt
- ✅ JWT token authentication
- ✅ Protected API routes
- ✅ Input validation
- ✅ CORS enabled
- ✅ Secure file upload handling

## 🎨 UI/UX Features

- ✅ Clean and modern design
- ✅ Responsive layout (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ User-friendly forms with validation
- ✅ Loading states
- ✅ Error handling and user feedback
- ✅ LinkedIn-inspired color scheme

## 🐛 Known Issues & Future Enhancements

### Potential Enhancements:
- [ ] Real-time notifications
- [ ] Follow/Unfollow users
- [ ] Private messaging
- [ ] Search functionality
- [ ] Hashtags and mentions
- [ ] Email verification
- [ ] Password reset functionality
- [ ] Post sharing
- [ ] Advanced profile customization
- [ ] Activity feed

## 📝 Development Notes

### Running in Development Mode

The frontend is configured to proxy API requests to `http://localhost:5000` in development mode (see `frontend/package.json`).

### File Upload

Images are stored in the `backend/uploads/` directory. In production, consider using cloud storage (AWS S3, Cloudinary, etc.).

## 🤝 Contributing

This is an internship assignment project. However, if you'd like to contribute:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is created for educational purposes as part of a Full Stack Developer Internship assignment.

## 👨‍💻 Author

Created for AppDost Full Stack Developer Internship

## 📧 Contact

For any queries regarding this project, please contact: hr@appdost.in

---

**Assignment Completed:** ✅

**Features Implemented:**
- ✅ User Login & Signup System
- ✅ Create Posts (with text and images)
- ✅ View All Posts (Feed)
- ✅ Like/Unlike Posts
- ✅ Comment on Posts
- ✅ Edit Own Posts
- ✅ Delete Own Posts
- ✅ User Profile Pages
- ✅ Clean & Responsive UI
- ✅ Full Authentication System

**Tech Stack Used:** React.js + Node.js/Express.js + MongoDB

**Ready for Deployment:** Yes ✅

