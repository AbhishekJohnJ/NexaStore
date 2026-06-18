import { useState, useEffect } from 'react';
import api from '../../utils/api';
import toast from 'react-hot-toast';

const statusOptions = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
const statusColors = {
  Pending: 'bg-yellow-100 text-yellow-800',
  Processing: 'bg-purple-100 text-purple-800',
  Shipped: 'bg-purple-100 text-purple-800',
  Delivered: 'bg-green-100 text-green-800',
  Cancelled: 'bg-red-100 text-red-800',
};

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/orders');
      setOrders(data);
    } catch (error) {
      toast.error('Failed to fetch orders');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await api.put(`/orders/${orderId}/status`, { status: newStatus });
      toast.success('Order status updated successfully!');
      fetchOrders();
    } catch (error) {
      toast.error('Failed to update order status');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">Manage Orders</h1>

        <div className="space-y-8">
          {orders.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl shadow-lg border border-gray-100">
              <p className="text-xl text-gray-500 font-medium">No orders found</p>
            </div>
          ) : (
            orders.map((order) => (
              <div key={order._id} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Order #{order.orderId}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Customer: {order.user?.name || 'N/A'}
                    </p>
                    <p className="text-sm text-gray-600">
                      Email: {order.user?.email || 'N/A'}
                    </p>
                    <p className="text-sm text-gray-600">
                      Date: {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="mb-2">
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                        Order Status
                      </label>
                      <select
                        value={order.orderStatus}
                        onChange={(e) =>
                          handleStatusChange(order._id, e.target.value)
                        }
                        className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 font-medium text-gray-800"
                      >
                        {statusOptions.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>
                    <span
                      className={`inline-block px-4 py-1.5 rounded-lg text-sm font-bold shadow-sm ${
                        statusColors[order.orderStatus]
                      }`}
                    >
                      {order.orderStatus}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm">Order Items</h4>
                  {order.products.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 mb-4 last:mb-0 p-4 bg-gray-50/50 rounded-xl border border-gray-100"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-xl shadow-sm"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          Quantity: {item.quantity} × ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <p className="font-bold text-gray-800">
                        ${(item.quantity * item.price).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 mt-6 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50/30 p-5 rounded-xl border border-blue-100/50">
                      <h4 className="font-bold text-gray-900 mb-3 uppercase tracking-wide text-sm">
                        Shipping Address
                      </h4>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-900">
                          {order.shippingAddress.fullName}
                        </p>
                        <p className="text-sm text-gray-600">
                          {order.shippingAddress.address}
                        </p>
                        <p className="text-sm text-gray-600">
                          {order.shippingAddress.city},{' '}
                          {order.shippingAddress.postalCode}
                        </p>
                        <p className="text-sm text-gray-600">
                          {order.shippingAddress.country}
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          <span className="font-medium">Phone:</span> {order.shippingAddress.phone}
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex flex-col justify-center items-end bg-amber-50/30 p-5 rounded-xl border border-amber-100/50">
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Total Amount</p>
                      <p className="text-4xl font-extrabold text-gray-900">
                        ${order.totalAmount.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
