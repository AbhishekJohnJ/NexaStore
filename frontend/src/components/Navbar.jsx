import { useContext, useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { user, logout, isAdmin } = useContext(AuthContext);
  const { cartItemCount } = useContext(CartContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchQuery(search);
    } else {
      setSearchQuery('');
    }
  }, [searchParams]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleLogoClick = () => {
    setSearchQuery('');
    navigate('/');
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    // Update URL and navigate to home
    if (value) {
      navigate(`/?search=${value}`);
    } else {
      navigate('/');
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div onClick={handleLogoClick} className="flex items-center space-x-3 cursor-pointer group">
            <div className="shine-logo rounded-lg">
              <img 
                src="/Logo_NoBG.png" 
                alt="NexaStore Logo" 
                className="h-12 w-auto transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="shine-text text-2xl font-extrabold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              NexaStore
            </span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search products..."
                className="w-full px-4 py-2.5 border-2 border-purple-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 pr-20 transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary-600 transition-colors duration-200"
                  title="Clear search"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-600 pointer-events-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {user ? (
              <>
                <Link to="/cart" className="relative group">
                  <div className="p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200">
                    <svg className="w-6 h-6 text-gray-700 group-hover:text-primary-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {cartItemCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg animate-pulse">
                        {cartItemCount}
                      </span>
                    )}
                  </div>
                </Link>
                <Link to="/orders" className="text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-200">
                  Orders
                </Link>
                {isAdmin() && (
                  <Link to="/admin/dashboard" className="px-4 py-2 bg-purple-100 text-primary-700 rounded-lg hover:bg-purple-200 font-semibold transition-all duration-200">
                    Admin
                  </Link>
                )}
                <div className="relative group">
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 font-semibold py-2 px-3 rounded-lg hover:bg-purple-50 transition-all duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span>{user.name}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-2 border-purple-100">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-primary-600 font-medium transition-colors duration-200">
                      Profile
                    </Link>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-primary-600 font-medium transition-colors duration-200">
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-primary-600 font-semibold transition-colors duration-200">
                  Login
                </Link>
                <Link to="/register" className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2.5 rounded-xl hover:from-primary-700 hover:to-primary-800 font-semibold shadow-lg shadow-primary-500/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-purple-50 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-purple-100 pt-4">
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search products..."
                  className="w-full px-4 py-2.5 border-2 border-purple-200 rounded-xl pr-16 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                {searchQuery && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-600 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            {user ? (
              <div className="space-y-2">
                <Link to="/cart" className="block py-2.5 px-4 text-gray-700 hover:text-primary-600 hover:bg-purple-50 rounded-lg font-semibold transition-all duration-200">
                  Cart ({cartItemCount})
                </Link>
                <Link to="/orders" className="block py-2.5 px-4 text-gray-700 hover:text-primary-600 hover:bg-purple-50 rounded-lg font-semibold transition-all duration-200">
                  Orders
                </Link>
                <Link to="/profile" className="block py-2.5 px-4 text-gray-700 hover:text-primary-600 hover:bg-purple-50 rounded-lg font-semibold transition-all duration-200">
                  Profile
                </Link>
                {isAdmin() && (
                  <Link to="/admin/dashboard" className="block py-2.5 px-4 text-gray-700 hover:text-primary-600 hover:bg-purple-50 rounded-lg font-semibold transition-all duration-200">
                    Admin Dashboard
                  </Link>
                )}
                <button onClick={handleLogout} className="block w-full text-left py-2.5 px-4 text-gray-700 hover:text-primary-600 hover:bg-purple-50 rounded-lg font-semibold transition-all duration-200">
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <Link to="/login" className="block py-2.5 px-4 text-gray-700 hover:text-primary-600 hover:bg-purple-50 rounded-lg font-semibold transition-all duration-200">
                  Login
                </Link>
                <Link to="/register" className="block py-2.5 px-4 text-gray-700 hover:text-primary-600 hover:bg-purple-50 rounded-lg font-semibold transition-all duration-200">
                  Register
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
