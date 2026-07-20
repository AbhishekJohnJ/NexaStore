// Mock Products Data - Always available without database
// This ensures products are visible even if backend is down

export const mockProducts = [
  // Electronics
  {
    _id: 'mock-1',
    name: 'Wireless Bluetooth Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life',
    category: 'Electronics',
    price: 79.99,
    stock: 50,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    rating: 4.5,
  },
  {
    _id: 'mock-2',
    name: 'Smart Watch Series 5',
    description: 'Advanced smartwatch with fitness tracking, heart rate monitor, and GPS',
    category: 'Electronics',
    price: 299.99,
    stock: 30,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    rating: 4.7,
  },
  {
    _id: 'mock-3',
    name: 'Wireless Earbuds',
    description: 'True wireless earbuds with charging case and premium sound quality',
    category: 'Electronics',
    price: 129.99,
    stock: 65,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    rating: 4.7,
  },
  {
    _id: 'mock-4',
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with precision tracking and long battery life',
    category: 'Electronics',
    price: 24.99,
    stock: 150,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
    rating: 4.1,
  },
  {
    _id: 'mock-5',
    name: 'Mechanical Keyboard',
    description: 'RGB mechanical gaming keyboard with premium switches',
    category: 'Electronics',
    price: 89.99,
    stock: 55,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=400&fit=crop',
    rating: 4.8,
  },
  {
    _id: 'mock-6',
    name: 'Gaming Mouse',
    description: 'RGB gaming mouse with programmable buttons and adjustable DPI',
    category: 'Electronics',
    price: 49.99,
    stock: 85,
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=400&fit=crop',
    rating: 4.6,
  },
  {
    _id: 'mock-7',
    name: 'Phone Stand',
    description: 'Adjustable phone stand for desk with anti-slip base',
    category: 'Electronics',
    price: 12.99,
    stock: 180,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop',
    rating: 4.3,
  },
  {
    _id: 'mock-8',
    name: 'Portable Power Bank',
    description: '20000mAh portable charger with fast charging support',
    category: 'Electronics',
    price: 29.99,
    stock: 120,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop',
    rating: 4.4,
  },

  // Clothing
  {
    _id: 'mock-9',
    name: 'Cotton T-Shirt',
    description: 'Comfortable 100% cotton t-shirt in various colors',
    category: 'Clothing',
    price: 19.99,
    stock: 200,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    rating: 4.3,
  },
  {
    _id: 'mock-10',
    name: 'Denim Jeans',
    description: 'Classic fit denim jeans with comfortable stretch',
    category: 'Clothing',
    price: 59.99,
    stock: 80,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    rating: 4.4,
  },
  {
    _id: 'mock-11',
    name: 'Hoodie Sweatshirt',
    description: 'Comfortable fleece hoodie perfect for casual wear',
    category: 'Clothing',
    price: 44.99,
    stock: 70,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    rating: 4.5,
  },
  {
    _id: 'mock-12',
    name: 'Sneakers',
    description: 'Casual sneakers for everyday wear with superior comfort',
    category: 'Clothing',
    price: 69.99,
    stock: 75,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop',
    rating: 4.4,
  },

  // Home & Kitchen
  {
    _id: 'mock-13',
    name: 'LED Desk Lamp',
    description: 'Adjustable LED desk lamp with touch control and USB charging',
    category: 'Home & Kitchen',
    price: 34.99,
    stock: 60,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
    rating: 4.6,
  },
  {
    _id: 'mock-14',
    name: 'Coffee Maker',
    description: 'Automatic coffee maker with programmable timer',
    category: 'Home & Kitchen',
    price: 79.99,
    stock: 40,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop',
    rating: 4.5,
  },
  {
    _id: 'mock-15',
    name: 'Blender',
    description: 'High-speed blender perfect for smoothies and shakes',
    category: 'Home & Kitchen',
    price: 69.99,
    stock: 50,
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=400&fit=crop',
    rating: 4.4,
  },

  // Sports
  {
    _id: 'mock-16',
    name: 'Yoga Mat',
    description: 'Non-slip yoga mat with carrying strap, eco-friendly material',
    category: 'Sports',
    price: 29.99,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop',
    rating: 4.6,
  },
  {
    _id: 'mock-17',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with cushioned sole and breathable mesh',
    category: 'Sports',
    price: 89.99,
    stock: 45,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    rating: 4.8,
  },
  {
    _id: 'mock-18',
    name: 'Water Bottle',
    description: 'Insulated stainless steel water bottle - 32oz capacity',
    category: 'Sports',
    price: 24.99,
    stock: 130,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
    rating: 4.8,
  },
  {
    _id: 'mock-19',
    name: 'Dumbbells Set',
    description: 'Adjustable dumbbells set - 5-25 lbs with storage case',
    category: 'Sports',
    price: 119.99,
    stock: 30,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop',
    rating: 4.7,
  },
  {
    _id: 'mock-20',
    name: 'Fitness Tracker Band',
    description: 'Track your daily activity, heart rate, and sleep patterns',
    category: 'Sports',
    price: 39.99,
    stock: 75,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop',
    rating: 4.0,
  },

  // Beauty
  {
    _id: 'mock-21',
    name: 'Sunglasses',
    description: 'UV protection polarized sunglasses with stylish design',
    category: 'Beauty',
    price: 39.99,
    stock: 110,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop',
    rating: 4.3,
  },
  {
    _id: 'mock-22',
    name: 'Face Cream',
    description: 'Moisturizing face cream with SPF 30 protection',
    category: 'Beauty',
    price: 34.99,
    stock: 95,
    image: 'https://images.unsplash.com/photo-1556228841-b5b6e9f66e96?w=400&h=400&fit=crop',
    rating: 4.4,
  },

  // Toys
  {
    _id: 'mock-23',
    name: 'LEGO Building Set',
    description: 'Creative building blocks set - 500 pieces for endless fun',
    category: 'Toys',
    price: 49.99,
    stock: 80,
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop',
    rating: 4.9,
  },
  {
    _id: 'mock-24',
    name: 'Remote Control Car',
    description: 'High-speed RC racing car with rechargeable battery',
    category: 'Toys',
    price: 69.99,
    stock: 60,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    rating: 4.7,
  },
  {
    _id: 'mock-25',
    name: 'Board Game',
    description: 'Family strategy board game for ages 8 and up',
    category: 'Toys',
    price: 34.99,
    stock: 90,
    image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=400&fit=crop',
    rating: 4.8,
  },
  {
    _id: 'mock-26',
    name: 'Stuffed Animal Bear',
    description: 'Soft and cuddly teddy bear - 18 inches tall',
    category: 'Toys',
    price: 29.99,
    stock: 110,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=400&fit=crop',
    rating: 4.7,
  },

  // Automotive
  {
    _id: 'mock-27',
    name: 'Car Phone Mount',
    description: 'Universal smartphone car mount holder with adjustable grip',
    category: 'Automotive',
    price: 19.99,
    stock: 110,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=400&fit=crop',
    rating: 4.4,
  },
  {
    _id: 'mock-28',
    name: 'Dash Cam',
    description: 'HD dash camera with night vision and loop recording',
    category: 'Automotive',
    price: 89.99,
    stock: 50,
    image: 'https://images.unsplash.com/photo-1611651338412-8403fa6e3599?w=400&h=400&fit=crop',
    rating: 4.7,
  },
  {
    _id: 'mock-29',
    name: 'Car Air Freshener Set',
    description: 'Premium car air freshener - Pack of 10 assorted scents',
    category: 'Automotive',
    price: 14.99,
    stock: 150,
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop',
    rating: 4.2,
  },

  // Health
  {
    _id: 'mock-30',
    name: 'Protein Powder',
    description: 'Whey protein powder for muscle building - 2lb container',
    category: 'Health',
    price: 34.99,
    stock: 80,
    image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&h=400&fit=crop',
    rating: 4.7,
  },
  {
    _id: 'mock-31',
    name: 'Multivitamin Supplements',
    description: 'Daily multivitamin for complete health - 60 capsules',
    category: 'Health',
    price: 24.99,
    stock: 150,
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=400&h=400&fit=crop',
    rating: 4.5,
  },
  {
    _id: 'mock-32',
    name: 'First Aid Kit',
    description: 'Complete first aid kit for home and travel emergencies',
    category: 'Health',
    price: 39.99,
    stock: 75,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=400&fit=crop',
    rating: 4.7,
  },

  // Books
  {
    _id: 'mock-33',
    name: 'Science Fiction Novel',
    description: 'Bestselling sci-fi adventure novel with thrilling plot',
    category: 'Books',
    price: 14.99,
    stock: 120,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    rating: 4.6,
  },
  {
    _id: 'mock-34',
    name: 'Cooking Book Collection',
    description: 'Set of 3 best-selling cooking books with easy recipes',
    category: 'Books',
    price: 44.99,
    stock: 35,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop',
    rating: 4.7,
  },

  // Other
  {
    _id: 'mock-35',
    name: 'Laptop Backpack',
    description: 'Durable laptop backpack with multiple compartments',
    category: 'Other',
    price: 49.99,
    stock: 100,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    rating: 4.3,
  },
  {
    _id: 'mock-36',
    name: 'Notebook Set',
    description: 'Set of 5 ruled notebooks for school or office',
    category: 'Other',
    price: 15.99,
    stock: 150,
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop',
    rating: 4.2,
  },
];

// Helper function to get products with pagination and filters
export const getFilteredProducts = ({
  search = '',
  category = '',
  sortBy = 'newest',
  page = 1,
  limit = 12,
  minPrice,
  maxPrice,
}) => {
  let filtered = [...mockProducts];

  // Filter by search
  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower)
    );
  }

  // Filter by category
  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  // Filter by price range
  if (minPrice) {
    filtered = filtered.filter((p) => p.price >= parseFloat(minPrice));
  }
  if (maxPrice) {
    filtered = filtered.filter((p) => p.price <= parseFloat(maxPrice));
  }

  // Sort products
  switch (sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
    default:
      // Keep original order (newest first)
      break;
  }

  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProducts = filtered.slice(startIndex, endIndex);

  return {
    products: paginatedProducts,
    total: filtered.length,
    pages: Math.ceil(filtered.length / limit),
    currentPage: page,
  };
};

// Get single product by ID
export const getProductById = (id) => {
  return mockProducts.find((p) => p._id === id);
};
