# 🛍️ NexaStore - Modern E-Commerce Platform

A full-featured, production-ready e-commerce application with beautiful purple-themed UI, comprehensive admin panel, and seamless shopping experience.

![NexaStore](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-18.2.0-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green.svg)

## ✨ Key Features

### 🛒 Customer Features
- **Product Browsing** - Beautiful product grid with images and ratings
- **Advanced Search & Filters** - Search, filter by category, sort by price/rating
- **Shopping Cart** - Add, remove, update quantities with real-time calculations
- **Secure Checkout** - Complete order placement with shipping details
- **Order Tracking** - View order history with status tracking and "View Product" buttons
- **User Profile** - Editable profile with modal popup for easy updates
- **Authentication** - Secure JWT-based login and registration

### 👨‍💼 Admin Features
- **Dashboard** - Real-time statistics (products, orders, users, revenue)
- **Product Management** - Full CRUD with search, category filter, and sorting
- **Order Management** - View all orders and update status
- **User Management** - View all registered users
- **Analytics** - Track sales and inventory

### 🎨 Design Highlights
- **Purple Theme** - Modern, consistent purple gradient theme throughout
- **Responsive Design** - Mobile-first design that works on all devices
- **Smooth Animations** - Optimized hover effects and transitions
- **Performance Optimized** - Lazy loading, memoization, and efficient rendering
- **User-Friendly** - Intuitive navigation and clear feedback

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd NexaStore

# 2. Install backend dependencies
cd backend
npm install

# 3. Install frontend dependencies
cd ../frontend
npm install

# 4. Setup environment variables
cd ../backend
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret

# 5. Seed the database (first time only)
node seeders/seed.js --confirm

# 6. Start backend (from backend folder)
npm start
# Backend runs on http://localhost:5000

# 7. Start frontend (from frontend folder, new terminal)
cd ../frontend
npm run dev
# Frontend runs on http://localhost:3000
```

### Default Login Credentials

After seeding the database:

**Admin Account:**
- Email: `admin@nexastore.com`
- Password: `admin123`

**Customer Account:**
- Email: `user@nexastore.com`
- Password: `user123`

## 📁 Project Structure

```
NexaStore/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Business logic
│   ├── middleware/      # Auth, validation, error handling
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── seeders/         # Database seed script
│   ├── utils/           # Helper functions
│   ├── .env.example     # Environment template
│   ├── package.json
│   └── server.js        # Entry point
│
├── frontend/
│   ├── public/          # Static assets (images, logos)
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── context/     # React Context (Auth, Cart)
│   │   ├── pages/       # Page components
│   │   │   └── admin/   # Admin pages
│   │   ├── utils/       # API client
│   │   ├── App.jsx      # Main app component
│   │   ├── index.css    # Global styles
│   │   └── main.jsx     # Entry point
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── .gitignore
├── LICENSE
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products (paginated, with search/filter)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart quantity
- `DELETE /api/cart/remove` - Remove item from cart

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/my-orders` - Get user orders
- `GET /api/orders` - Get all orders (Admin)
- `PUT /api/orders/:id/status` - Update order status (Admin)

### Users
- `GET /api/users` - Get all users (Admin)
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - Modern UI framework
- **Vite 5.2** - Lightning-fast build tool
- **React Router 6** - Client-side routing
- **Tailwind CSS 3.4** - Utility-first CSS
- **Axios** - HTTP client
- **React Hot Toast** - Beautiful notifications
- **Context API** - State management

### Backend
- **Node.js** - JavaScript runtime
- **Express 4.19** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 8.3** - MongoDB ODM
- **JWT** - Secure authentication
- **bcryptjs** - Password hashing
- **Express Validator** - Input validation

## 📦 Product Categories

The application supports 10 product categories:
- Electronics
- Clothing
- Books
- Home & Kitchen
- Sports
- Beauty
- Toys
- Automotive
- Health
- Other

## 🔐 Security Features

- ✅ JWT token-based authentication
- ✅ Password hashing with bcrypt
- ✅ Role-based authorization (User/Admin)
- ✅ Protected API routes
- ✅ Input validation and sanitization
- ✅ CORS configuration
- ✅ Environment variable security
- ✅ Error handling middleware

## ⚡ Performance Optimizations

- **React.memo** - Prevent unnecessary re-renders
- **Lazy Loading** - Images load on-demand
- **Code Splitting** - Optimized bundle size
- **Debouncing** - Search and filter inputs
- **Efficient Animations** - Removed heavy blur filters
- **Fast Transitions** - Reduced animation durations
- **Pagination** - Limit 12 products per page

## 🎯 Key Functionalities

### Customer Experience
1. **Browse Products** - Grid layout with filters and sorting
2. **Search** - Find products by name or description
3. **Product Details** - View full information, ratings, and stock
4. **Add to Cart** - Manage cart with quantity updates
5. **Checkout** - Enter shipping information
6. **Place Order** - Generate unique order ID
7. **Track Orders** - View order history with status
8. **View Product from Order** - Direct link back to product page
9. **Profile Management** - Edit profile in modal popup

### Admin Panel
1. **Dashboard** - Quick stats overview
2. **Product Management** - Add, edit, delete with filters
3. **Order Management** - Update order status
4. **User Management** - View customer accounts
5. **Search & Filter** - Find products quickly
6. **Sort Options** - Organize by name, price, stock, rating

## 📱 Responsive Design

- **Mobile** - Optimized for phones (320px+)
- **Tablet** - Enhanced layout for tablets (768px+)
- **Desktop** - Full experience (1024px+)
- **Large Screens** - Max-width containers for readability

## 🚨 Important Notes

### Database Seeding
⚠️ **CAUTION**: The seed script deletes all data!

```bash
# Safe way (shows warning):
node seeders/seed.js

# Only run if you want to reset:
node seeders/seed.js --confirm
```

**After initial setup:**
- Add products via Admin Panel
- Do NOT run seed script again
- Your custom products will be preserved

### Environment Variables

Create `.env` in backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

## 📸 Screenshots

### Customer Interface
- **Home Page** - Product grid with purple gradient header
- **Product Details** - Full product information with Add to Cart
- **Shopping Cart** - Review items before checkout
- **Checkout** - Simple form for shipping details
- **Orders** - Track order status with "View" buttons
- **Profile** - Modal popup for editing user information

### Admin Panel
- **Dashboard** - Statistics cards with metrics
- **Products** - Table view with filters and search
- **Orders** - Manage all customer orders
- **Users** - View registered customers

## 🔧 Development

### Backend Development
```bash
cd backend
npm run dev  # Runs with nodemon
```

### Frontend Development
```bash
cd frontend
npm run dev  # Runs with Vite HMR
```

### Build for Production
```bash
cd frontend
npm run build
```

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Check MongoDB is running (local) or URI is correct (Atlas)
- Verify network access in MongoDB Atlas
- Check firewall settings

### Port Already in Use
- Backend: Change `PORT` in `.env`
- Frontend: Vite will prompt for alternate port

### CORS Errors
- Verify backend URL in `frontend/src/utils/api.js`
- Check CORS configuration in `backend/server.js`

## 📚 Additional Documentation

For detailed setup and deployment:
1. Check backend `.env.example` for environment variables
2. Review `tailwind.config.js` for theme colors
3. See API endpoints section above for backend routes

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Features Summary

| Feature | Customer | Admin |
|---------|----------|-------|
| Browse Products | ✅ | ✅ |
| Search & Filter | ✅ | ✅ |
| Product Details | ✅ | ✅ |
| Shopping Cart | ✅ | ❌ |
| Checkout | ✅ | ❌ |
| Order History | ✅ | ✅ (All) |
| Profile Edit | ✅ | ✅ |
| Product CRUD | ❌ | ✅ |
| Order Management | ❌ | ✅ |
| User Management | ❌ | ✅ |
| Dashboard | ❌ | ✅ |

## 🎨 Color Scheme

Primary Purple Theme:
- `primary-600`: #9333ea
- `primary-700`: #7e22ce
- `primary-800`: #6b21a8

## 💡 Tips

1. **For Development**: Use admin account to manage products
2. **For Testing**: Use user account to simulate customer experience
3. **For Production**: Update environment variables and security keys
4. **For Performance**: Images should be optimized (WebP recommended)

## 📞 Support

For issues or questions:
- Check documentation above
- Review error messages in browser console
- Verify environment variables
- Check MongoDB connection

---

**Built with ❤️ using React, Node.js, Express, MongoDB, and Tailwind CSS**

**NexaStore** - Your Modern E-Commerce Solution
