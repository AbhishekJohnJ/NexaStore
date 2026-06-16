import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import User from '../models/User.js';
import Product from '../models/Product.js';
import Order from '../models/Order.js';
import Cart from '../models/Cart.js';

dotenv.config();

const sampleProducts = [
  {
    name: 'Wireless Bluetooth Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    category: 'Electronics',
    price: 79.99,
    stock: 50,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    rating: 4.5,
  },
  {
    name: 'Smart Watch Series 5',
    description: 'Advanced smartwatch with fitness tracking',
    category: 'Electronics',
    price: 299.99,
    stock: 30,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    rating: 4.7,
  },
  {
    name: 'Laptop Backpack',
    description: 'Durable laptop backpack with multiple compartments',
    category: 'Other',
    price: 49.99,
    stock: 100,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    rating: 4.3,
  },
  {
    name: 'USB-C Charging Cable',
    description: 'Fast charging USB-C cable - 6ft',
    category: 'Electronics',
    price: 14.99,
    stock: 200,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop',
    rating: 4.2,
  },
  {
    name: 'Fitness Tracker Band',
    description: 'Track your daily activity and health metrics',
    category: 'Sports',
    price: 39.99,
    stock: 75,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop',
    rating: 4.0,
  },
  {
    name: 'Portable Power Bank',
    description: '20000mAh portable charger for all devices',
    category: 'Electronics',
    price: 29.99,
    stock: 120,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop',
    rating: 4.4,
  },
  {
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with precision tracking',
    category: 'Electronics',
    price: 24.99,
    stock: 150,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
    rating: 4.1,
  },
  {
    name: 'LED Desk Lamp',
    description: 'Adjustable LED desk lamp with touch control',
    category: 'Home & Kitchen',
    price: 34.99,
    stock: 60,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
    rating: 4.6,
  },
  {
    name: 'Running Shoes',
    description: 'Lightweight running shoes with cushioned sole',
    category: 'Sports',
    price: 89.99,
    stock: 45,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    rating: 4.8,
  },
  {
    name: 'Cotton T-Shirt',
    description: 'Comfortable 100% cotton t-shirt',
    category: 'Clothing',
    price: 19.99,
    stock: 200,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    rating: 4.3,
  },
  {
    name: 'Denim Jeans',
    description: 'Classic fit denim jeans',
    category: 'Clothing',
    price: 59.99,
    stock: 80,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    rating: 4.4,
  },
  {
    name: 'Cooking Book Collection',
    description: 'Set of 3 best-selling cooking books',
    category: 'Books',
    price: 44.99,
    stock: 35,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop',
    rating: 4.7,
  },
  {
    name: 'Coffee Maker',
    description: 'Automatic coffee maker with timer',
    category: 'Home & Kitchen',
    price: 79.99,
    stock: 40,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop',
    rating: 4.5,
  },
  {
    name: 'Yoga Mat',
    description: 'Non-slip yoga mat with carrying strap',
    category: 'Sports',
    price: 29.99,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop',
    rating: 4.6,
  },
  {
    name: 'Wireless Earbuds',
    description: 'True wireless earbuds with charging case',
    category: 'Electronics',
    price: 129.99,
    stock: 65,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    rating: 4.7,
  },
  {
    name: 'Blender',
    description: 'High-speed blender for smoothies and shakes',
    category: 'Home & Kitchen',
    price: 69.99,
    stock: 50,
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=400&fit=crop',
    rating: 4.4,
  },
  {
    name: 'Sunglasses',
    description: 'UV protection polarized sunglasses',
    category: 'Beauty',
    price: 39.99,
    stock: 110,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop',
    rating: 4.3,
  },
  {
    name: 'Notebook Set',
    description: 'Set of 5 ruled notebooks',
    category: 'Other',
    price: 15.99,
    stock: 150,
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop',
    rating: 4.2,
  },
  {
    name: 'Water Bottle',
    description: 'Insulated stainless steel water bottle - 32oz',
    category: 'Sports',
    price: 24.99,
    stock: 130,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
    rating: 4.8,
  },
  {
    name: 'Hoodie Sweatshirt',
    description: 'Comfortable fleece hoodie',
    category: 'Clothing',
    price: 44.99,
    stock: 70,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    rating: 4.5,
  },
  {
    name: 'Gaming Mouse',
    description: 'RGB gaming mouse with programmable buttons',
    category: 'Electronics',
    price: 49.99,
    stock: 85,
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=400&fit=crop',
    rating: 4.6,
  },
  {
    name: 'Face Cream',
    description: 'Moisturizing face cream with SPF',
    category: 'Beauty',
    price: 34.99,
    stock: 95,
    image: 'https://images.unsplash.com/photo-1556228841-b5b6e9f66e96?w=400&h=400&fit=crop',
    rating: 4.4,
  },
  {
    name: 'Dumbbells Set',
    description: 'Adjustable dumbbells set - 5-25 lbs',
    category: 'Sports',
    price: 119.99,
    stock: 30,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop',
    rating: 4.7,
  },
  {
    name: 'Phone Stand',
    description: 'Adjustable phone stand for desk',
    category: 'Electronics',
    price: 12.99,
    stock: 180,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop',
    rating: 4.3,
  },
  {
    name: 'Travel Pillow',
    description: 'Memory foam travel neck pillow',
    category: 'Other',
    price: 22.99,
    stock: 100,
    image: 'https://images.unsplash.com/photo-1584062919270-29c24ba5e3d5?w=400&h=400&fit=crop',
    rating: 4.5,
  },
  {
    name: 'Mechanical Keyboard',
    description: 'RGB mechanical gaming keyboard',
    category: 'Electronics',
    price: 89.99,
    stock: 55,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=400&fit=crop',
    rating: 4.8,
  },
  {
    name: 'Sneakers',
    description: 'Casual sneakers for everyday wear',
    category: 'Clothing',
    price: 69.99,
    stock: 75,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop',
    rating: 4.4,
  },
  {
    name: 'Science Fiction Novel',
    description: 'Bestselling sci-fi adventure novel',
    category: 'Books',
    price: 14.99,
    stock: 120,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    rating: 4.6,
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    await Cart.deleteMany();

    console.log('Data cleared!');

    // Create admin user
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@nexastore.com',
      password: 'admin123',
      role: 'admin',
    });

    // Create regular user
    const regularUser = await User.create({
      name: 'John Doe',
      email: 'user@nexastore.com',
      password: 'user123',
      role: 'user',
    });

    console.log('Users created!');

    // Create products
    await Product.insertMany(sampleProducts);

    console.log('Products created!');

    console.log('Database seeded successfully!');
    console.log('\nLogin Credentials:');
    console.log('Admin - Email: admin@nexastore.com, Password: admin123');
    console.log('User  - Email: user@nexastore.com, Password: user123');

    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedDatabase();
