# 🚀 NexaStore - Quick Start Guide

Get NexaStore running in **5 minutes**!

## Prerequisites Check

Before starting, verify you have:
- ✅ Node.js installed → `node --version` (need v14+)
- ✅ MongoDB installed or MongoDB Atlas account
- ✅ Git installed → `git --version`

## 5-Minute Setup

### Step 1: Get the Code (30 seconds)
```bash
cd NexaStore
```

### Step 2: Install Everything (2 minutes)
```bash
npm run install-all
```
This installs all dependencies for backend and frontend.

### Step 3: Setup Database (1 minute)

**Option A - Local MongoDB** (if installed):
MongoDB should be running automatically. Check with:
```bash
# Windows
net start MongoDB

# Mac
brew services list | grep mongodb

# Linux
sudo systemctl status mongod
```

**Option B - MongoDB Atlas** (cloud):
1. Get connection string from MongoDB Atlas
2. Edit `backend/.env`
3. Update `MONGODB_URI=your_atlas_connection_string`

### Step 4: Add Sample Data (30 seconds)
```bash
npm run seed
```

You should see:
```
✓ Data cleared!
✓ Users created!
✓ Products created!
✓ Database seeded successfully!
```

### Step 5: Start the App (30 seconds)
```bash
npm run dev
```

Wait for:
```
✓ Backend running on http://localhost:5000
✓ Frontend running on http://localhost:3000
```

### Step 6: Open & Login (30 seconds)
Open browser → http://localhost:3000

**Login as User:**
- Email: `user@nexastore.com`
- Password: `user123`

**Login as Admin:**
- Email: `admin@nexastore.com`
- Password: `admin123`

## 🎉 You're Done!

Now you can:
- 🛍️ Browse 8 sample products
- 🛒 Add items to cart
- 📦 Place orders
- 👤 View your profile
- 🔧 Access admin panel (as admin)

## Common Issues & Quick Fixes

### ❌ "MongoDB connection failed"
**Fix**: Start MongoDB service
```bash
# Windows
net start MongoDB

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### ❌ "Port 5000 already in use"
**Fix**: Change port in `backend/.env`
```env
PORT=5001
```

### ❌ "npm run seed fails"
**Fix**: Check MongoDB is running and connection string is correct
```bash
# Test MongoDB connection
cd backend
node -e "require('dotenv').config(); const mongoose = require('mongoose'); mongoose.connect(process.env.MONGODB_URI).then(() => console.log('✓ Connected')).catch(err => console.log('✗', err.message));"
```

### ❌ "Cannot find module"
**Fix**: Reinstall dependencies
```bash
rm -rf node_modules package-lock.json
npm run install-all
```

## Next Steps

### As a User:
1. Browse products on home page
2. Click a product to see details
3. Add products to cart
4. Go to cart and proceed to checkout
5. Fill shipping information
6. Place order
7. View orders in "Orders" page

### As an Admin:
1. Login as admin
2. Click "Admin" in navbar
3. View dashboard statistics
4. Manage Products:
   - Add new products
   - Edit existing products
   - Delete products
5. Manage Orders:
   - View all orders
   - Update order status
6. View Users:
   - See all registered users

## Folder Structure Quick Reference

```
NexaStore/
├── backend/          → Node.js API
│   ├── models/      → Database schemas
│   ├── controllers/ → Business logic
│   ├── routes/      → API endpoints
│   └── .env         → Configuration
│
├── frontend/         → React App
│   └── src/
│       ├── pages/   → All pages
│       ├── components/ → Reusable components
│       └── context/ → State management
│
└── package.json     → Root scripts
```

## Available Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start both servers |
| `npm run server` | Backend only |
| `npm run client` | Frontend only |
| `npm run seed` | Reset & add sample data |
| `npm run build` | Build for production |

## Important URLs

- 🌐 Frontend: http://localhost:3000
- ⚙️ Backend: http://localhost:5000
- 📊 API Health: http://localhost:5000/api/health
- 👨‍💼 Admin Panel: http://localhost:3000/admin/dashboard

## Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@nexastore.com | admin123 |
| User | user@nexastore.com | user123 |

## Need More Help?

- 📖 Full Setup Guide: [SETUP.md](./SETUP.md)
- 🚀 Deployment Guide: [DEPLOYMENT.md](./DEPLOYMENT.md)
- 📚 Complete Docs: [README.md](./README.md)
- 📋 Project Summary: [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)

## Testing Checklist

Once running, test these features:

**User Features:**
- [ ] Register new user
- [ ] Login
- [ ] Browse products
- [ ] Search products
- [ ] Filter by category
- [ ] Sort products
- [ ] View product details
- [ ] Add to cart
- [ ] Update cart quantity
- [ ] Remove from cart
- [ ] Checkout
- [ ] Place order
- [ ] View order history
- [ ] View profile
- [ ] Logout

**Admin Features:**
- [ ] Login as admin
- [ ] View dashboard stats
- [ ] Add product
- [ ] Edit product
- [ ] Delete product
- [ ] View all orders
- [ ] Update order status
- [ ] View all users

## Troubleshooting Quick Reference

| Error | Solution |
|-------|----------|
| MongoDB not connecting | Start MongoDB service |
| Port already in use | Change port in .env |
| Dependencies error | Run `npm run install-all` |
| Seed fails | Check MongoDB connection |
| Page not loading | Check both servers running |
| API 401 error | Login again |
| Cannot add to cart | Login first |

## Performance Tips

For better development experience:
1. Keep both servers running
2. Use MongoDB Compass to view database
3. Check browser console for errors
4. Use React DevTools for debugging
5. Check Network tab for API calls

## What's Next?

After testing the app:
1. Read [README.md](./README.md) for complete documentation
2. Explore the code structure
3. Customize for your needs
4. Deploy to production (see [DEPLOYMENT.md](./DEPLOYMENT.md))

## Happy Coding! 🎉

You now have a fully functional e-commerce application running locally!

---

**Need Help?** Check the other guide files or open an issue on GitHub.
