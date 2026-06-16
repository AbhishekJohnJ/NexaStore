# NexaStore - Quick Setup Guide

Follow these steps to get NexaStore running on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (local installation or MongoDB Atlas account)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download](https://git-scm.com/)

## Step-by-Step Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd NexaStore
```

### 2. Install Dependencies

Install root dependencies and all project dependencies:

```bash
npm install
npm run install-all
```

This will install dependencies for:
- Root project (for running scripts)
- Backend (Node.js/Express)
- Frontend (React/Vite)

### 3. Setup MongoDB

Choose one of the following options:

#### Option A: Local MongoDB

1. Install MongoDB from https://www.mongodb.com/try/download/community
2. Start MongoDB service:
   - **Windows**: MongoDB should start automatically
   - **Mac**: `brew services start mongodb-community`
   - **Linux**: `sudo systemctl start mongod`
3. MongoDB will run on `mongodb://localhost:27017`

#### Option B: MongoDB Atlas (Cloud)

1. Create a free account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Add a database user
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get your connection string from "Connect" → "Connect your application"

### 4. Configure Environment Variables

Navigate to the backend directory and set up environment variables:

```bash
cd backend
```

The `.env` file has already been created with default values. If you're using MongoDB Atlas or want to change settings, edit `backend/.env`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nexastore
JWT_SECRET=nexastore_super_secret_jwt_key_2024_change_in_production
JWT_EXPIRE=7d
NODE_ENV=development
```

**For MongoDB Atlas**, change `MONGODB_URI` to your connection string:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nexastore
```

### 5. Seed the Database

Populate the database with sample data (products and users):

```bash
cd ..
npm run seed
```

This creates:
- **8 sample products** across different categories
- **Admin user**: admin@nexastore.com / admin123
- **Regular user**: user@nexastore.com / user123

You should see output like:
```
Data cleared!
Users created!
Products created!
Database seeded successfully!

Login Credentials:
Admin - Email: admin@nexastore.com, Password: admin123
User  - Email: user@nexastore.com, Password: user123
```

### 6. Start the Application

From the root directory, start both backend and frontend:

```bash
npm run dev
```

This runs both servers concurrently:
- **Backend**: http://localhost:5000
- **Frontend**: http://localhost:3000

#### Alternative: Run Separately

**Backend only:**
```bash
npm run server
```

**Frontend only:**
```bash
npm run client
```

### 7. Access the Application

Open your browser and navigate to:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api/health

### 8. Login and Test

#### As a Regular User:
1. Go to http://localhost:3000
2. Click "Login"
3. Use credentials:
   - Email: user@nexastore.com
   - Password: user123
4. Browse products, add to cart, place orders

#### As an Admin:
1. Login with:
   - Email: admin@nexastore.com
   - Password: admin123
2. Access Admin Dashboard from the navbar
3. Manage products, orders, and users

## Troubleshooting

### MongoDB Connection Issues

**Error**: "MongoServerError: Authentication failed"
- Check your MongoDB credentials in `.env`
- For Atlas: Verify database user password is correct

**Error**: "MongooseServerSelectionError: connect ECONNREFUSED"
- Ensure MongoDB is running locally
- For local: Start MongoDB service
- For Atlas: Check internet connection and IP whitelist

### Port Already in Use

**Error**: "Port 5000 is already in use"
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

Change port in `backend/.env`:
```env
PORT=5001
```

### Frontend Connection Issues

**Error**: "Network Error" or "Cannot connect to backend"
- Verify backend is running on http://localhost:5000
- Check browser console for CORS errors
- Ensure proxy is configured in `frontend/vite.config.js`

### Dependencies Installation Issues

**Error**: "npm ERR! code ENOENT"
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Database Seeding Issues

**Error**: "Database seeding failed"
- Ensure MongoDB is running and accessible
- Check connection string in `.env`
- Try manual connection test:
```bash
cd backend
node -e "require('dotenv').config(); const mongoose = require('mongoose'); mongoose.connect(process.env.MONGODB_URI).then(() => console.log('Connected!')).catch(err => console.error(err));"
```

## Project Structure Quick Reference

```
NexaStore/
├── backend/                 # Backend API
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Auth, validation, error handling
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── seeders/            # Database seeders
│   ├── utils/              # Helper functions
│   ├── .env                # Environment variables
│   ├── package.json        # Backend dependencies
│   └── server.js           # Express server
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── context/        # Context API (Auth, Cart)
│   │   ├── pages/          # Page components
│   │   ├── utils/          # API utilities
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── index.html          # HTML template
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite configuration
├── package.json            # Root package for scripts
└── README.md               # Documentation
```

## Available Scripts

From root directory:

```bash
# Install all dependencies
npm run install-all

# Run both backend and frontend
npm run dev

# Run backend only
npm run server

# Run frontend only
npm run client

# Seed database with sample data
npm run seed

# Build frontend for production
npm run build
```

## Next Steps

1. **Explore the Application**
   - Browse products
   - Add items to cart
   - Complete a checkout
   - View order history

2. **Admin Features**
   - Login as admin
   - Add new products
   - Manage orders
   - View users

3. **Customize**
   - Add more products via admin panel
   - Modify product categories
   - Update styling
   - Add new features

4. **Deploy**
   - Follow DEPLOYMENT.md for production deployment
   - Setup MongoDB Atlas
   - Deploy to Render/Vercel

## Support

If you encounter any issues:
1. Check this guide first
2. Review error messages in terminal
3. Check browser console for frontend errors
4. Verify MongoDB connection
5. Ensure all environment variables are set

## Security Notes for Development

The default credentials are for development only:
- Change JWT_SECRET before production
- Use strong passwords for admin accounts
- Never commit `.env` files to version control
- Use HTTPS in production

## Enjoy Building with NexaStore! 🚀
