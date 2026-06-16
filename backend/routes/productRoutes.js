import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/auth.js';
import { productValidation, validate } from '../middleware/validation.js';

const router = express.Router();

router
  .route('/')
  .get(getProducts)
  .post(protect, admin, productValidation, validate, createProduct);

router
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;
