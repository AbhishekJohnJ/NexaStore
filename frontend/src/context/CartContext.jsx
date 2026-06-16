import { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';
import api from '../utils/api';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      fetchCart();
    } else {
      setCart(null);
    }
  }, [user]);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/cart');
      setCart(data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    try {
      const { data } = await api.post('/cart/add', { productId, quantity });
      setCart(data);
      return data;
    } catch (error) {
      throw error;
    }
  };

  const updateCartItem = async (productId, quantity) => {
    try {
      const { data } = await api.put('/cart/update', { productId, quantity });
      setCart(data);
    } catch (error) {
      throw error;
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const { data } = await api.delete('/cart/remove', {
        data: { productId },
      });
      setCart(data);
    } catch (error) {
      throw error;
    }
  };

  const cartItemCount = cart?.items?.length || 0;

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        updateCartItem,
        removeFromCart,
        fetchCart,
        cartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
