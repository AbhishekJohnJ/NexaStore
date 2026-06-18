import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../utils/api';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalRevenue: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const [products, orders, users] = await Promise.all([
        api.get('/products'),
        api.get('/orders'),
        api.get('/users'),
      ]);

      const revenue = orders.data.reduce(
        (sum, order) => sum + order.totalAmount,
        0
      );

      setStats({
        totalProducts: products.data.total || products.data.products.length,
        totalOrders: orders.data.length,
        totalUsers: users.data.length,
        totalRevenue: revenue,
      });
    } catch (error) {
      toast.error('Failed to fetch dashboard stats');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary-600"></div>
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary-400 absolute top-0"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-primary-800 to-primary-900 rounded-3xl overflow-hidden shadow-2xl mb-12">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-purple-400 opacity-20 rounded-full blur-3xl"></div>
          
          <div className="relative p-10 md:p-14 flex flex-col md:flex-row justify-between items-center z-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                Command Center
              </h1>
              <p className="text-primary-100 text-lg font-medium">
                Overview and management of your NexaStore empire.
              </p>
            </div>
            <div className="mt-6 md:mt-0 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 shadow-inner">
              <p className="text-white font-semibold text-sm uppercase tracking-wider">System Status</p>
              <div className="flex items-center mt-1">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2 shadow-[0_0_10px_rgba(74,222,128,0.8)]"></span>
                <span className="text-green-50 font-bold">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-500">Total Products</p>
              <div className="p-2 bg-blue-50 rounded-lg">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.totalProducts}</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-500">Total Orders</p>
              <div className="p-2 bg-emerald-50 rounded-lg">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.totalOrders}</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-500">Total Users</p>
              <div className="p-2 bg-purple-50 rounded-lg">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.totalUsers}</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <div className="p-2 bg-gray-100 rounded-lg">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">${stats.totalRevenue.toFixed(2)}</p>
          </div>
        </div>

        {/* Quick Links Header */}
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Quick Management</h2>
          <div className="ml-4 h-px bg-gray-300 flex-grow"></div>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="/admin/products"
            className="group relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Manage Products</h3>
              <p className="text-gray-500 font-medium">Add new inventory, edit details, or remove discontinued items.</p>
              <div className="mt-6 flex items-center text-blue-600 font-bold opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                Go to Products <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </Link>

          <Link
            to="/admin/orders"
            className="group relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Manage Orders</h3>
              <p className="text-gray-500 font-medium">Review customer orders, update statuses, and track shipments.</p>
              <div className="mt-6 flex items-center text-emerald-600 font-bold opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                Go to Orders <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </Link>

          <Link
            to="/admin/users"
            className="group relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Manage Users</h3>
              <p className="text-gray-500 font-medium">View registered customers, manage roles, and review accounts.</p>
              <div className="mt-6 flex items-center text-purple-600 font-bold opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                Go to Users <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
