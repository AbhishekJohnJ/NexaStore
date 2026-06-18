import { memo } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product._id}`}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-purple-100 hover:border-primary-300 will-change-transform"
    >
      <div className="relative h-72 bg-gradient-to-br from-purple-50 to-purple-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <span className="text-white font-bold text-xl bg-red-500 px-6 py-3 rounded-full">Out of Stock</span>
          </div>
        )}
        {product.stock > 0 && product.stock < 10 && (
          <div className="absolute top-4 right-4">
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              Only {product.stock} left!
            </span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg bg-opacity-90">
            {product.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 truncate group-hover:text-primary-600 transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-3xl font-extrabold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center space-x-1 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-bold text-gray-700">{product.rating.toFixed(1)}</span>
          </div>
        </div>
        <button className="w-full py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-colors duration-200 shadow-md">
          View Details
        </button>
      </div>
    </Link>
  );
};

// Memoize to prevent unnecessary re-renders
export default memo(ProductCard);
