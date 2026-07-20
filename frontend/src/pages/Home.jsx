import { useState, useEffect, useMemo, useCallback } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import api from '../utils/api';
import ProductCard from '../components/ProductCard';
import toast from 'react-hot-toast';
import { getFilteredProducts } from '../data/mockProducts';

const categories = [
  'All',
  'Electronics',
  'Clothing',
  'Books',
  'Home & Kitchen',
  'Sports',
  'Beauty',
  'Toys',
  'Automotive',
  'Health',
  'Other',
];

const Home = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Debounced states to prevent UI hanging
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const [debouncedMinPrice, setDebouncedMinPrice] = useState('');
  const [debouncedMaxPrice, setDebouncedMaxPrice] = useState('');

  // Sync search query from URL
  useEffect(() => {
    const search = searchParams.get('search') || '';
    setSearchQuery(search);
  }, [location.search, searchParams]);

  // Debounce user inputs
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
      setDebouncedMinPrice(minPrice);
      setDebouncedMaxPrice(maxPrice);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, minPrice, maxPrice]);

  // Fetch products when dependencies change
  useEffect(() => {
    fetchProducts();
  }, [debouncedSearchQuery, selectedCategory, sortBy, page, debouncedMinPrice, debouncedMaxPrice]);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const category = selectedCategory === 'All' ? '' : selectedCategory;
      
      try {
        // Try to fetch from backend API first
        const { data } = await api.get('/products', {
          params: {
            search: debouncedSearchQuery,
            category,
            sort: sortBy,
            page,
            limit: 12,
            minPrice: debouncedMinPrice || undefined,
            maxPrice: debouncedMaxPrice || undefined,
          },
        });

        setProducts(data.products);
        setTotalPages(data.pages);
      } catch (error) {
        // If backend fails, use mock products (frontend fallback)
        console.log('Backend unavailable, using mock products');
        
        const mockData = getFilteredProducts({
          search: debouncedSearchQuery,
          category,
          sortBy,
          page,
          limit: 12,
          minPrice: debouncedMinPrice,
          maxPrice: debouncedMaxPrice,
        });

        setProducts(mockData.products);
        setTotalPages(mockData.pages);
      }
    } catch (error) {
      toast.error('Failed to load products');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearchQuery, selectedCategory, sortBy, page, debouncedMinPrice, debouncedMaxPrice]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setPage(1);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setPage(1);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setPage(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setPage(1);
  };

  const handlePriceFilterChange = (e) => {
    const value = e.target.value;
    setPriceFilter(value);
    setPage(1);

    if (value === '') {
      setMinPrice('');
      setMaxPrice('');
    } else if (value === 'under-50') {
      setMinPrice('');
      setMaxPrice('50');
    } else if (value === '50-100') {
      setMinPrice('50');
      setMaxPrice('100');
    } else if (value === '100-500') {
      setMinPrice('100');
      setMaxPrice('500');
    } else if (value === 'over-500') {
      setMinPrice('500');
      setMaxPrice('');
    }
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
    setPriceFilter('');
    setPage(1);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
    setPriceFilter('');
    setPage(1);
  };

  const handleResetPrice = () => {
    setMinPrice('');
    setMaxPrice('');
    setPriceFilter('');
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-24 w-full">
        {/* Simplified background - removed heavy blur filters */}
        <div className="absolute inset-0 overflow-hidden w-full">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white/20 text-purple-100 text-sm font-semibold rounded-full border border-white/30">
                Premium Quality Products
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white">
              Welcome to NexaStore
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto font-light">
              Discover Amazing Products at Great Prices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold hover:bg-purple-50 transition-colors duration-200 shadow-lg"
              >
                Shop Now
              </button>
              <Link
                to="/about"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors duration-200 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Simplified wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
                  fill="rgb(250, 245, 255)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="products-section">
        {/* Filters */}
        <div className="mb-12">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent mb-3">
              Explore Our Collection
            </h2>
            <p className="text-gray-600 text-lg">Find the perfect product for you</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
              {/* Categories Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-semibold">Item Category</label>
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="px-4 py-3 border-2 border-purple-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-700 font-medium cursor-pointer transition-all duration-200 w-full shadow-sm hover:border-primary-300"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Predefined Price Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-semibold">Price Filter</label>
                <select
                  value={priceFilter}
                  onChange={handlePriceFilterChange}
                  className="px-4 py-3 border-2 border-purple-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-700 font-medium cursor-pointer transition-all duration-200 w-full shadow-sm hover:border-primary-300"
                >
                  <option value="">All Prices</option>
                  <option value="under-50">Under $50</option>
                  <option value="50-100">$50 to $100</option>
                  <option value="100-500">$100 to $500</option>
                  <option value="over-500">Over $500</option>
                </select>
              </div>

              {/* Custom Price Range */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-700 font-semibold">Custom Price Range</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className="px-3 py-3 border-2 border-purple-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-700 w-full shadow-sm hover:border-primary-300 min-w-0"
                  />
                  <span className="text-gray-400 font-medium">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className="px-3 py-3 border-2 border-purple-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-700 w-full shadow-sm hover:border-primary-300 min-w-0"
                  />
                  <button
                    onClick={handleResetPrice}
                    className="px-4 py-3 bg-red-100 text-red-600 rounded-xl font-semibold hover:bg-red-200 transition-colors shadow-sm"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="flex flex-col justify-end">
              <div className="flex items-center space-x-3 bg-white p-3 md:p-4 rounded-xl border-2 border-purple-100 shadow-md h-full lg:h-[52px] lg:mt-8">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
                <label className="text-gray-700 font-semibold whitespace-nowrap">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className="px-2 py-1 border-none focus:outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex flex-col justify-center items-center min-h-[400px]">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary-600"></div>
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary-400 absolute top-0"></div>
            </div>
            <p className="mt-4 text-gray-600 font-medium">Loading amazing products...</p>
          </div>
        ) : products.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 mt-12">
                <button
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                  className="group px-6 py-3 bg-white border-2 border-purple-200 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-50 hover:border-primary-400 transition-all duration-300 font-semibold text-gray-700 shadow-md hover:shadow-lg disabled:hover:bg-white disabled:hover:border-purple-200"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Previous</span>
                  </div>
                </button>
                
                <div className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-bold shadow-lg">
                  Page {page} of {totalPages}
                </div>
                
                <button
                  onClick={() => setPage(page + 1)}
                  disabled={page === totalPages}
                  className="group px-6 py-3 bg-white border-2 border-purple-200 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-50 hover:border-primary-400 transition-all duration-300 font-semibold text-gray-700 shadow-md hover:shadow-lg disabled:hover:bg-white disabled:hover:border-purple-200"
                >
                  <div className="flex items-center space-x-2">
                    <span>Next</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-purple-100 rounded-full mb-4">
              <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
