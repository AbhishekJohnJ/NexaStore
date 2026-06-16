# 🛍️ NexaStore - Modern E-Commerce Application

A production-ready, full-stack e-commerce web application with separate admin and user roles, built with React, Node.js, Express, and MongoDB.

![NexaStore](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-18.2.0-blue.svg)

## Features

### User Features
- User registration and authentication with JWT
- Browse and search products
- Filter products by category
- Sort products (price, rating, newest)
- View product details
- Add products to cart
- Update cart quantities
- Checkout with shipping information
- Place orders
- View order history
- Track order status
- User profile page

### Admin Features
- Admin dashboard with statistics
- Manage products (CRUD operations)
- View all users
- View and manage all orders
- Update order status
- Real-time dashboard metrics

## Tech Stack

### Frontend
- React.js with Vite
- React Router for navigation
- Axios for API calls
- Tailwind CSS for styling
- React Hot Toast for notifications
- Context API for state management

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT authentication
- bcryptjs for password hashing
- Express Validator for input validation

## Project Structure

```
NexaStore/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   ├── productController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── error.js
│   │   └── validation.js
│   ├── models/
│   │   ├── Cart.js
│   │   ├── Order.js
│   │   ├── Product.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── productRoutes.js
│   │   └── userRoutes.js
│   ├── seeders/
│   │   └── seed.js
│   ├── utils/
│   │   └── generateToken.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AdminRoute.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── PrivateRoute.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── CartContext.jsx
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   │   ├── AdminDashboard.jsx
│   │   │   │   ├── AdminOrders.jsx
│   │   │   │   ├── AdminProducts.jsx
│   │   │   │   └── AdminUsers.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── Register.jsx
│   │   ├── utils/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd NexaStore

# 2. Install all dependencies
npm run install-all

# 3. Seed the database with sample data
npm run seed

# 4. Start the application
npm run dev
```

The application will be running at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

**Default Login Credentials:**
- Admin: `admin@nexastore.com` / `admin123`
- User: `user@nexastore.com` / `user123`

For detailed setup instructions, see [SETUP.md](./SETUP.md)

## 📖 Documentation

- **[Setup Guide](./SETUP.md)** - Detailed installation and configuration instructions
- **[Deployment Guide](./DEPLOYMENT.md)** - Deploy to production (Render, Vercel, MongoDB Atlas)
- **[API Documentation](#api-endpoints)** - Complete API reference below

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Products
- `GET /api/products` - Get all products (with pagination, search, filters)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item quantity
- `DELETE /api/cart/remove` - Remove item from cart

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/my-orders` - Get user orders
- `GET /api/orders` - Get all orders (Admin only)
- `PUT /api/orders/:id/status` - Update order status (Admin only)

### Users
- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/profile` - Get user profile

## 📸 Screenshots

### User Interface
- **Home Page**: Browse products with search, filter, and sort
- **Product Details**: View product information and add to cart
- **Shopping Cart**: Manage cart items and quantities
- **Checkout**: Enter shipping information and place orders
- **Order History**: Track order status

### Admin Panel
- **Dashboard**: View statistics (products, orders, users, revenue)
- **Product Management**: Add, edit, delete products
- **Order Management**: Update order status
- **User Management**: View all registered users

## Features in Detail

### Authentication & Authorization
- JWT-based authentication
- Password hashing with bcryptjs
- Role-based access control (User/Admin)
- Protected routes on both frontend and backend

### Product Management
- Pagination for product listings
- Search by product name
- Filter by category
- Sort by price, rating, or newest
- Admin CRUD operations

### Shopping Cart
- Add/remove items
- Update quantities
- Real-time price calculations
- Persistent cart in database

### Checkout & Orders
- Shipping information collection
- Order confirmation
- Unique order ID generation
- Order status tracking
- Order history

### Admin Dashboard
- Statistics (Products, Orders, Users, Revenue)
- Quick access to management pages

## 🌐 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run install-all` | Install dependencies for backend and frontend |
| `npm run dev` | Run both backend and frontend concurrently |
| `npm run server` | Run backend only (port 5000) |
| `npm run client` | Run frontend only (port 3000) |
| `npm run seed` | Seed database with sample data |
| `npm run build` | Build frontend for production |

## Security Features
- JWT token authentication
- Password hashing
- Input validation
- Protected API routes
- Role-based authorization
- CORS configuration
- Error handling middleware

## 🛠️ Technologies Used

### Frontend
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.2.0 | UI Framework |
| Vite | 5.2.10 | Build Tool |
| React Router | 6.23.0 | Routing |
| Axios | 1.6.8 | HTTP Client |
| Tailwind CSS | 3.4.3 | Styling |
| React Hot Toast | 2.4.1 | Notifications |

### Backend
| Technology | Version | Purpose |
|-----------|---------|---------|
| Node.js | 14+ | Runtime |
| Express | 4.19.2 | Web Framework |
| MongoDB | Latest | Database |
| Mongoose | 8.3.4 | ODM |
| JWT | 9.0.2 | Authentication |
| bcryptjs | 2.4.3 | Password Hashing |
| Express Validator | 7.0.1 | Input Validation |

## 🔐 Security Features

- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ Role-based authorization
- ✅ Input validation and sanitization
- ✅ Protected API routes
- ✅ CORS configuration
- ✅ Error handling middleware
- ✅ Environment variable management

## 🚀 Performance Optimizations

- Pagination for large datasets
- Efficient database queries with indexes
- Image optimization recommendations
- Lazy loading components
- API response caching ready
- Optimized bundle size

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**NexaStore Team**

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

## 📞 Support

For support and questions:
- 📧 Email: support@nexastore.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/nexastore/issues)
- 📖 Documentation: [Setup Guide](./SETUP.md) | [Deployment Guide](./DEPLOYMENT.md)

---

**Made with ❤️ using React, Node.js, and MongoDB**
